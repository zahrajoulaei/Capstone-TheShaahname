// Import the Character model to interact with the characters collection in MongoDB
const Character = require("../models/Character");

// Controller to handle GET requests to fetch characters
// Supports optional filtering by name, monarchy, or age using query parameters
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
    console.error("Server Error:", err);
    res.status(500).send("Server Error");
  }
};

// Controller to handle POST requests to create a new character
exports.createCharacter = async (req, res) => {
  const { name, monarchy, age, abilities, specialty } = req.body;

  // Validate that all required fields are provided
  if (!name || !monarchy || !age || !abilities || !specialty) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a new Character instance with the provided data
    const newCharacter = new Character({
      name,
      monarchy,
      age,
      abilities,
      specialty,
    });
    await newCharacter.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).send("Server Error");
  }
};

// Controller to handle PATCH requests to update an existing character by ID
exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    // Log the ID and the data being updated for debugging purposes
    console.log(`Updating character with ID: ${id}`);
    console.log(`Update data: ${JSON.stringify(updateData)}`);

    const updatedCharacter = await Character.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedCharacter) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(updatedCharacter);
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).send("Server Error");
  }
};

// Controller to handle DELETE requests to remove a character by ID
exports.deleteCharacter = async (req, res) => {
  const { id } = req.params;

  try {
    // Log the ID to ensure it's being passed correctly
    console.log(`Deleting character with ID: ${id}`);

    // Attempt to delete the character by ID
    const deletedCharacter = await Character.findByIdAndDelete(id);

    if (!deletedCharacter) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.json({ message: "Character deleted successfully" });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).send("Server Error");
  }
};