
//Mongoose schema file

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id:{type: String},
  name: { type: String, index: true }, 
  children: {type: [String]},
  monarchy: { type: String, index: true }, 
  age: { type: Number, required: true, index: true }, 
  abilities: {type: [String]},
  specialty: {type: String},
}); 

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;