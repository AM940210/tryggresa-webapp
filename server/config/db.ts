import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("❌ Missing MONGODB_URI in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}
