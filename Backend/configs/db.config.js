const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;