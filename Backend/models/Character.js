
//Mongoose schema file

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id:{type: String , default:"333"},
  name: { type: String, index: true , default:"Zahra" }, 
  children: {type: [String], default:"none"},
  monarchy: { type: String, index: true , default:"king"}, 
  age: { type: Number, required: true, index: true , default:"34"}, 
  abilities: {type: [String],default:"inivisblity"},
  specialty: {type: String,default:"none"},
}); 

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;