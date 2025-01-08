import express from "express";
import passport from "./passport";
import jwt from "jsonwebtoken";

const router = express.Router();

//Google OAuth route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        const user = req.user;
        const token = jwt.sign({ user }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        res.json({ token });
    }
);

export default router;