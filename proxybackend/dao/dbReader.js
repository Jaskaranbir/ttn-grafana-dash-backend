const mongoose = require('mongoose')
const connection = require('./connection')

const config = require('../config')

const getDbConnection = async () => {
  try {
    const db = await connection.open()
    return db
  }
  catch(err) {
    console.log(err)
  }
}

const fetchData = async (sensorName, fromTimeRawStr, toTimeRawStr) => {
  const SensorModel = new config.sensorModelsMap[sensorName]()
  const results = await config.sensorModelsMap[sensorName]
    .find({
      timestamp: {
        $gt: new Date(fromTimeRawStr),
        $lt: new Date(toTimeRawStr)
      }
    })
  return results
}

const getSensorDataInTimeRange = async (sensorName, fromTimeRawStr, toTimeRawStr) => {
  const db = await getDbConnection()
  if (db) {
    const results = await fetchData(sensorName, fromTimeRawStr, toTimeRawStr)
    return results
  }
}

module.exports = {
  getSensorDataInTimeRange
}
