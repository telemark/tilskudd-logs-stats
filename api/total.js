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
    response.end(JSON.stringify({ total: count }))
  } catch (error) {
    logger('error', ['total', error])
    response.writeHead(500)
    response.end(error.toString())
  }
}
