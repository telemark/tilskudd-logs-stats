'use strict'

const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  logger('info', ['queue', 'start'])
  try {
    const count = await logs.countDocuments({ isQueued: true })
    logger('info', ['queue', 'success', count])
    response.end(JSON.stringify({ queue: count }))
  } catch (error) {
    logger('error', ['queue', error])
    response.writeHead(500)
    response.end(error.toString())
  }
}
