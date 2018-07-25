const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TermperatureSchema = new Schema({
  value: {type: Number, required: true},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('Termperature', TermperatureSchema)
