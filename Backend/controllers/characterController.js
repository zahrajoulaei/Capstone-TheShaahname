const Character = require("../models/Character");
const mongoose = require('mongoose');


// Controller to handle GET requests to fetch characters
exports.getCharacters = async (req, res) => {
  try {
    const { name, monarchy, age } = req.query;
    let query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (monarchy) query.monarchy = { $regex: monarchy, $options: "i" };
    if (age) query.age = parseInt(age);

    const characters = await Character.find(query);
    res.json(characters);
  } catch (err) {
    console.error("Error fetching characters:", err);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
};

// Controller to handle POST requests to create a new character
exports.createCharacter = async (req, res) => {
  const { id, name, monarchy,children, age, abilities, specialty } = req.body;

  if (!id, !name || !monarchy || !children || !age || !abilities || !specialty) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (Array.isArray(req.body)) {
    const character = await Character.insertMany(req.body);
    res.status(201).json({ character });
    return;
  } 

  // try {
  //   const newCharacter = new Character({
  //     id,
  //     name,
  //     monarchy,
  //     children,
  //     age,
  //     abilities,
  //     specialty,
  //   });
  //   await newCharacter.save();
  //   res.status(201).json(newCharacter);
  // } catch (err) {
  //   console.error("Error creating character:", err);
  //   res.status(500).send("Server Error");
  // }
  try {
    const newCharacter = await Character.create(req.body)
    res.status(201).json({newCharacter});
  } catch (err) {
    console.error("Error creating character:", err);
    res.status(500).send("Server Error");
  }
};

// Controller to handle PATCH requests to update an existing character by ID
exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedCharacter = await Character.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedCharacter) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(updatedCharacter);
  } catch (err) {
    console.error("Error updating character:", err);
    res.status(500).send("Server Error");
  }
};

// Controller to handle DELETE requests to remove a character by ID
exports.deleteCharacter = async (req, res) => {
  const characterId = req.params.id
  console.log(characterId)
  console.log(`Attempting to delete character with ID: `);

  try {
    const character = await Character.findOne({_id: characterId});

    if (!character) {
      console.log(`Character with ID  not found.`);
      return
    }

    const deletedCharacter = await character.deleteOne()

    if (!deletedCharacter) {
      console.log(`Character with ID  not found.`);
      return res.status(404).json({ error: "Character not found" });
    }

    res.json({ message: "Character deleted successfully" });
  } catch (err) {
    console.error("Error deleting character:", err);
    res.status(500).send("Server Error");
  }
};