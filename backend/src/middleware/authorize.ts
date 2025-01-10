import { Request, Response, NextFunction } from "express";

export const authorize =
    (...roles: string[]) =>
        (req: Request, res: Response, next: NextFunction): void => {
            const user = req.user as { role: string };

            if (!user) {
                res.status(401).json({ message: "Unauthorized. please log in." });
                return;
            }

            if (!roles.includes(user.role)) {
                res.status(403).json({ message: "Access denied. Insufficient permissions." });
                return;
            }

            next();
        };