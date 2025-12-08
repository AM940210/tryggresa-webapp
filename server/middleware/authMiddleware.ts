import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export interface AuthRequest extends Request {
    user?: any;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Ingen token, åtkomst nekad" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(" Decoded token:", decoded);
        req.user = decoded; // id, email, role
        next();
    } catch (err) {
        return res.status(401).json({ message: "Ogiltig token" });
    }
}