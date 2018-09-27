const { readFile } = require('fs').promises
const md = require('markdown-it')()
const { send } = require('micro')
const resolveRequest = require('./lib/resolve-request')
const handleStats = require('./lib/handle-stats')
const logger = require('./lib/logger')

module.exports = async (request, response) => {
  const query = await resolveRequest(request)
  try {
    if (query.domain === 'stats') {
      logger('info', ['index', 'stats'])
      const result = await handleStats(query)
      response.setHeader('Access-Control-Allow-Origin', '*')
      send(response, 200, result)
    } else {
      logger('info', ['index', 'frontpage'])
      const readme = await readFile('README.md', 'utf-8')
      send(response, 200, md.render(readme))
    }
  } catch (error) {
    logger('error', ['index', error])
    send(response, 500, error)
  }
}
