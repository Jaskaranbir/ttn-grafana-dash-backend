const mongoose = require('mongoose')

const connection = require('./connection')
const config = require('../config')
const schema = require('./schema')

const isDbSessionOpen = false
async function openDbSession() {
  if (!isDbSessionOpen) {
    try {
      await connection.open()
      return true
    }
    catch(err) {
      console.error(`Error opening DbSession: ${err}`)
      return false
    }
  }
}

async function writeToDb(sensorName, value) {
  const model = mongoose.model(sensorName.toLowerCase(), schema)
  const sensorData = new model({
    value: value,
    timestamp: Date.now()
  })

  try {
    await sensorData.save()
  }
  catch(err) {
    console.error(`Error writing sensor-data: ${err}`)
  }
}

// Payload format: (string) "sensorId:sensorValue"
async function savePayload(sensor) {
  const dbSuccess = await openDbSession()
  if (!dbSuccess) {
    return
  }

  const sensorArr = sensor.split(":")
  const id = sensorArr[0]
  const value = sensorArr[1]

  const sensorName = config.sensorModels[id]
  if (!sensorName) {
    console.error(
      `Found a payload with sensor-id "${id}", which is not registered in config`
    )
    return
  }

  writeToDb(sensorName, value)
}

module.exports = {
  savePayload
}
