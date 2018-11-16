module.exports = {
  serialPort: 'COM8',

  // To add a sensor, add the assiciated sensor-id here
  // and the name of that sensor.
  // Same goes for removing a sensor, jsut remove the entry.
  sensorModels: {
    "0": "Barometric",
    "1": "Humidity",
    "2": "Luminosity",
    "3": "Temperature"
  },

  mongoUrl: 'mongodb:27017',
  mongoUser: 'loraUser',
  mongoPass: 'Testtest123',
  mongoDb: 'loradb',

  // Port on which the server is run
  port: 8081
}
