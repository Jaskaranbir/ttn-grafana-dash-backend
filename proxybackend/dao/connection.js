const mongoose = require('mongoose')
const config = require('../config')

const mongoConnStr = `mongodb://${config.mongoUser}:${config.mongoPass}@${config.mongoUrl}/${config.mongoDb}`

async function open() {
  let dbConn
  try {
    dbConn = await mongoose.connect(mongoConnStr, {useNewUrlParser: true })
  }
  catch(err) {
    console.log(err)
  }
  return dbConn
}

module.exports = {
  open
}
