import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/authRoutes";
import bookingRoutes from "./routes/bookingRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

// connect to MongoDB
connectDB();

// Test-route
app.get("/", (_req, res) => {
    res.json({ message: "TryggResa API is running" });
});

// auth-API
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});