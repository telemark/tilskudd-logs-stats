'use strict'

const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  logger('info', ['categories', 'start'])
  try {
    const results = await logs.aggregate([{ $match: {} }, { $group: { _id: '$artform.artform', total: { $sum: 1 } } }]).sort({ total: -1 }).toArray()
    logger('info', ['categories', 'success', results.length])
    response.end(JSON.stringify(results))
  } catch (error) {
    logger('error', ['categories', error])
    response.writeHead(500)
    response.end(error.toString())
  }
}
