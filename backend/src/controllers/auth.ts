import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db";

const { validationResult } = require('express-validator');

//Google OAuth callback
export const googleCallback = (req: Request, res: Response) => {
    const user = req.user;
    const token = jwt.sign({ user }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    res.json({ token });
};

//Registration
export const register = async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error");
        res.status(500).json({ error: "Server Error", message: err instanceof Error ? err.message : "An unknown error occurred" });
    }
};

// Login
export const login = async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = userResult.rows[0];
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "15m",
        });
        const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err instanceof Error ? err.message : "Unknown error");
        res.status(500).json({ error: "Server Error", message: err instanceof Error ? err.message : "An unknown error occurred" });
    }
};

// Token Refresh
export const refreshToken = async (req: Request, res: Response): Promise<any> => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: "No token provided" });
    }

    try {
        const payload: any = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);

        const newAccessToken = jwt.sign({ id: payload.id, role: payload.role }, process.env.JWT_SECRET!, {
            expiresIn: "15m",
        });

        res.json({ accessToken: newAccessToken });
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(401).json({ message: "Invalid token" });
        } else {
            console.error("Unknown error");
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
};