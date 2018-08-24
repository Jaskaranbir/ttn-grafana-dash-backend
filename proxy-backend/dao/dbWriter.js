const mongoose = require('mongoose')
const connection = require('./connection')

const config = require('../config')
const baseData = require('../baseData')
const payload = baseData.payload_fields

const Barometric = require('../models/barometric.model')
const Humidity = require('../models/humidity.model')
const Luminostiy = require('../models/luminosity.model')
const Temperature = require('../models/temperature.model')

// Helps save some lines, since our model names
// are different compared to data received
const SensorSchemaNameMap = {
  barometric_pressure_4: Barometric,
  luminosity_3: Luminostiy,
  relative_humidity_2: Humidity,
  temperature_0: Temperature
}

// Transforms the base payload by adding/subtracting
// some random factor, and saves it to database
const generateAndSaveMockData = () => {
  return Object.keys(payload)
    // We only consider keys that
    // have maxVariance defined
    .filter(k => SensorSchemaNameMap[k])
    // Process the values in accordance with maxVariance
    .map(async (payloadKey) => {
      const sensorData = transformData(payloadKey)
      // console.log(sensorData)
      const saveResult = await sensorData.save()
      // console.log(
      //   JSON.stringify(saveResult)
      // )
      return saveResult
    })
}

// Handles transformation for above function
const transformData = (payloadKey) => {
  const maxVariance = {
    barometric_pressure_4: 17,
    luminosity_3: 50,
    relative_humidity_2: 7,
    temperature_0: 3
  }

  // Add if even number, else Subtract
  const addMode = parseInt(Math.random() * 100) % 2
  // Get max variance for this sensor
  const variance = maxVariance[payloadKey]
  // Use the factor as random number upto maxVariance
  let addFactor = Math.floor(Math.random() * variance) + 1

  addFactor *= addMode ? 1 : -1

  const sensorData = new SensorSchemaNameMap[payloadKey]({
    value: payload[payloadKey] + addFactor,
    timestamp: Date.now()
  })
  return sensorData
}

const insertMockData = async () => {
  try {
    const db = await connection.open()
    if (db) {
      await Promise.all(generateAndSaveMockData(db))
      db.disconnect()
    }
  }
  catch(err) {
    console.log(err)
  }
}

let shouldWrite = false

// Start writing mock data
const startWriting = () => {
  shouldWrite = true
  const interval = setInterval(() => {
    if (shouldWrite) insertMockData()
    else clearInterval(interval)
  }, config.mockInsertInterval)
}

// Stop writing mock data
const stopWriting = () => {
  shouldWrite = false
}

module.exports = {
  start: startWriting,
  stop: stopWriting
}
