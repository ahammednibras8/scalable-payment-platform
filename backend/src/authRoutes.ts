import express from "express";
import passport from "./passport";
import { googleCallback, register, login, refreshToken } from "./controllers/auth";

const { body } = require('express-validator');

const router = express.Router();

// Google OAuth route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { session: false }), googleCallback);

// Registration Route
router.post("/register",
    [
        body("username").isLength({ min: 3 }),
        body("email").isEmail(),
        body("password").isLength({ min: 6 }),
    ],
    register
);

// Login endpoint
router.post("/login",
    [
        body("email").isEmail(),
        body("password").isLength({ min: 6 }),
    ],
    login
);

// Token refresh endpoint
router.post("/refresh-token", refreshToken);

export default router;
