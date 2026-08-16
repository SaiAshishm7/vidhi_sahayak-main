const mongoose = require("mongoose");

/**
 * Connect to MongoDB using the MONGODB_URI from .env
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/vidhisahayak";
  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅  MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("⚠️  MongoDB connection warning:", err.message);
    console.error("   (Ensure MongoDB is running or set MONGODB_URI in backend/.env)");
  }
}

module.exports = connectDB;
