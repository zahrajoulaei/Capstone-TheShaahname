// // This is the old server structure which is refactored to modules
// require("dotenv").config();
// const express = require("express");
// var cors = require("cors");
// const mongoose = require("mongoose");
// const Character = require("./Character");

// const app = express();
// const port = process.env.PORT || 3000;
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const mongoURI = process.env.ATLAS_URI;

// mongoose
//   .connect(mongoURI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// // API endpoint to get characters or search for characters
// app.get("/api/characters", async (req, res) => {
//   try {
//     const { name, monarchy, age } = req.query;
//     let query = {};

//     // Add search conditions based on query parameters
//     if (name) {
//       query.name = { $regex: name, $options: "i" }; // Case-insensitive search
//     }
//     if (monarchy) {
//       query.monarchy = { $regex: monarchy, $options: "i" };
//     }
//     if (age) {
//       query.age = parseInt(age);
//     }

//     // If no query parameters are provided, it will return all characters
//     const characters = await Character.find(query);

//     console.log("Characters to show:", characters);
//     res.json(characters);
//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).send("Server Error");
//   }
// });

// // API endpoint to create a new character

// app.post("/api/characters", async (req, res) => {
//   console.log("Request Body:", req.body);

//   const { name, monarchy, age, abilities, specialty } = req.body;

//   if (!name || !monarchy || !age || !abilities || !specialty ) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const newCharacter = new Character({
//       name,
//       monarchy,
//       age,
//       abilities,
//       specialty,
//       imageUrl,
//     });

//     await newCharacter.save();
//     res.status(201).json(newCharacter);
//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).send("Server Error");
//   }
// });

// // API endpoint to update a character by ID
// app.patch("/api/characters/:id", async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   try {
//     // Find the character by ID and update it with the provided data
//     const updatedCharacter = await Character.findByIdAndUpdate(id, updateData, {
//       new: true,
//     });

//     if (!updatedCharacter) {
//       return res.status(404).json({ error: "Character not found" });
//     }

//     res.json(updatedCharacter);
//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).send("Server Error");
//   }
// });

// // API endpoint to delete a character by ID
// app.delete("/api/characters/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Find the character by ID and delete it
//     const deletedCharacter = await Character.findByIdAndDelete(id);

//     if (!deletedCharacter) {
//       return res.status(404).json({ error: "Character not found" });
//     }

//     res.json({ message: "Character deleted successfully" });
//   } catch (err) {
//     console.error("Server Error:", err);
//     res.status(500).send("Server Error");
//   }
// });

// // Root route ("/")
// app.get("/", (req, res) => {
//   res.send("Welcome to the Shaahnameh API!");
// });

// app.listen(port, () => {
//   console.log(`Shahnameh API running at http://localhost:${port}`);
// });
