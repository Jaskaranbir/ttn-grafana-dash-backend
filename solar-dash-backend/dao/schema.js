const mongoose = require('mongoose')

// Mongo-Schema for storing sensor-data
const Schema = new mongoose.Schema({
  value: {type: Number, required: true},
  timestamp: {type: Date, required: true}
})

module.exports = Schema
