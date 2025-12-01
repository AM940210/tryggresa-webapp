import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { connect } from "http2";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
connectDB();

app.get("/", (_req, res) => {
    res.json({ message: "TryggResa API is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})