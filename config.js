module.exports = {
  DB: process.env.DB || 'mongodb://localhost/tilskudd',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'tilskudd',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
