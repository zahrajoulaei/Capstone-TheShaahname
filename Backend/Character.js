const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  children: [String],
  monarchy: String,
  age: { type: Number, required: true },
  abilities: [String],
  specialty: String,
}, { collection: 'characters' }); 

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;