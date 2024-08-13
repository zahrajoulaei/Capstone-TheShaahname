
//Mongoose schema file

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: { type: Number, index: true }, 
  name: { type: String, index: true }, 
  children: [String],
  monarchy: { type: String, index: true }, 
  age: { type: Number, required: true, index: true }, 
  abilities: [String],
  specialty: String,
}, { collection: 'characters' }); 

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;