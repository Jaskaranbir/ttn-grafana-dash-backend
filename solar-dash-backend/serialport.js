const SerialPort = require('serialport')
const config = require("./config")
const dbWriter = require('./dao/dbWriter')

const port = new SerialPort(config.serialPort, err => {
  console.log(`Error opening serial-port: ${err}`)
})

const sensorPayloads = "0:12,1:23".split(",")
sensorPayloads.forEach(dbWriter.savePayload)
// Data format is comma-separated "sensorId:sensorValue".
// Example: "0:12,1:34.3,3:67".
port.on('data', data => {
  const sensorPayloads = data.split(",")
  sensorPayloads.forEach(dbWriter.savePayload)
})
