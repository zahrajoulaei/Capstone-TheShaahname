require("dotenv").config();
const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Character = require("./Character");

const app = express();
const port = process.env.PORT || 3030;
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.ATLAS_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// API endpoint to get characters
app.get("/api/characters", async (req, res) => {
  try {
    const characters = await Character.find(); 

    console.log("charachterssss to SHOWWWWWW:", characters);
    res.json(characters);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

//post
app.post("/api/characters", async (req, res) => {
  console.log("Request Body:", req.body); 

  const { name, monarchy, age, abilities, specialty, imageUrl } = req.body;

  if (!name || !monarchy || !age || !abilities || !specialty || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newCharacter = new Character({
      name,
      monarchy,
      age,
      abilities,
      specialty,
      imageUrl,
    });

    await newCharacter.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).send("Server Error");
  }
});

// Root route ("/")
app.get("/", (req, res) => {
  res.send("Welcome to the Shahnameh API!");
});

app.listen(port, () => {
  console.log(`Shahnameh API running at http://localhost:${port}`);
});
