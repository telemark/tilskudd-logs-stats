'use strict'

const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  logger('info', ['total', 'start'])
  try {
    const count = await logs.countDocuments({})
    logger('info', ['total', 'success', count])
    response.json({ total: count })
  } catch (error) {
    logger('error', ['total', error])
    response.status(500)
    response.send(error.toString())
  }
}
