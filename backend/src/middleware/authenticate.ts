import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Unauthorized. No token provided." });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: number; role: string };
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Unauthorized. Invalid token." });
        return;
    }
};