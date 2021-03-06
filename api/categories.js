'use strict'

const mongo = require('../lib/mongo')
const logger = require('../lib/logger')

module.exports = async (request, response) => {
  const db = await mongo()
  const logs = db.collection(process.env.MONGODB_COLLECTION)
  logger('info', ['categories', 'start'])
  try {
    const results = await logs.aggregate([{ $match: {} }, { $group: { _id: '$formal.formal', total: { $sum: 1 } } }]).sort({ total: -1 }).toArray()
    logger('info', ['categories', 'success', results.length])
    response.json(results)
  } catch (error) {
    logger('error', ['categories', error])
    response.status(500)
    response.send(error.toString())
  }
}
