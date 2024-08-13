const express = require('express');
const router = express.Router();

const {
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter,
} = require('../controllers/characterController');

// Root route
router.get('/', (req, res) => {
    res.send("Welcome to the Shaahnameh API!");
});

// Character routes
router.get('/characters', getCharacters);
router.post('/characters', createCharacter);
router.patch('/characters/:id', updateCharacter);
router.delete('/characters/:id', deleteCharacter);

module.exports = router;