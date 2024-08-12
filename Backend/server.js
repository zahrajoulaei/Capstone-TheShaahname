require('dotenv').config();
const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const Character = require('./Character'); // Import Character model

const app = express();
const port = process.env.PORT || 3030;
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.ATLAS_URI;


mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// API endpoint to get characters
app.get('/api/characters', async (req, res) => {
  try {
    const characters = await Character.find(); // Fetch all characters from MongoDB
    
    console.log("charachterssss to SHOWWWWWW:",characters);
    res.json(characters);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Root route ("/") 
app.get('/', (req, res) => {
  res.send('Welcome to the Shahnameh API!');
  console.log("HIIIIII")
});

app.listen(port, () => {
  console.log(`Shahnameh API running at http://localhost:${port}`);
  console.log("HIIIII API")
});


