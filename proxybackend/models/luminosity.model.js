const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LuminositySchema = new Schema({
  value: {type: Number, required: true},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('Luminosity', LuminositySchema)
