//Imports the Mongoose library
const mongoose = require("mongoose");

//Uses dotenv in prject
require("dotenv").config();


//Function to establish a connection to the MongoDB database
const connectDB = async () => {
  try {
    const options = {
      dbName: "ferdowsi"
    }
    await mongoose.connect(process.env.ATLAS_URI, options);
    console.log("Welcome! Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);

    // Exit the process with a failure code (1) if unable to connect to the database
    process.exit(1);
  }
};

module.exports = connectDB;
