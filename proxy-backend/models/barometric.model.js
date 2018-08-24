const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BarometricSchema = new Schema({
  value: {type: Number, required: true},
  timestamp: {type: Date, required: true}
});

module.exports = mongoose.model('Barometric', BarometricSchema)
