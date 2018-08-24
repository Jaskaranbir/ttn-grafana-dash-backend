const Barometric = require('./models/barometric.model')
const Humidity = require('./models/humidity.model')
const Luminosity = require('./models/luminosity.model')
const Temperature = require('./models/temperature.model')

module.exports = {
  // Sensor common-names.
  // Be sure to add a model for the sensor
  // when you the sensor here.
  sensorModelsMap: {
    Barometric: Barometric,
    Humidity: Humidity,
    Luminosity: Luminosity,
    Temperature: Temperature
  },

  mongoUrl: 'mongodb:27017',
  mongoUser: 'loraUser',
  mongoPass: 'Testtest123',
  mongoDb: 'loradb',

  // Interval for mock-writer to push data to db
  mockInsertInterval: 4500, // Millisecond
  // Port on which the server is run
  port: 8080
}
