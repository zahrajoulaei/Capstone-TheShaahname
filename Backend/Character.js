//Mongoose schema file

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true }, 
  children: [String],
  monarchy: { type: String, required: true, index: true }, 
  age: { type: Number, required: true, index: true }, 
  abilities: { type: [String], required: true },
  specialty: { type: String, required: true },
}, { collection: 'characters' }); 

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;