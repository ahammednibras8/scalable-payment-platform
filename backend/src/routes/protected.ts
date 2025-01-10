import express from "express";
import { authorize } from "../middleware/authorize";

const router = express.Router();

router.get("/admin", authorize("admin"), (req, res) => {
    res.json({ message: "Welcome, Admin!" });
});

router.get("/merchant", authorize("admin", "merchant"), (req, res) => {
    res.json({ message: "Welcome, Admin or Merchant!" });
});

router.get("/user", authorize("user", "admin", "merchant"), (req, res) => {
    res.json({ message: "Welcome, User!" });
});

export default router;