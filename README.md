[![Build Status](https://travis-ci.org/telemark/tilskudd-logs-stats.svg?branch=master)](https://travis-ci.org/telemark/tilskudd-logs-stats)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# tilskudd-logs-stats

Stats for tilskudd logs

## API

### ```GET /stats/total```

Get stats for total of logs

### ```GET /stats/queue```

Get number of logs in queue

### ```GET /stats/categories```

Get number of applications grouped by categories

## Development

Add a local `.env`

```
NODE_ENV=development
MONGODB_CONNECTION=mongodb-connection-string
MONGODB_COLLECTION=mongodb-collection-name
MONGODB_NAME=mongodb-db-name
PAPERTRAIL_HOSTNAME=tilskudd
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

Start the development server

```
$ npm run dev
```

## Deploy

Check the settings in [now.json](now.json)

Run the deployment script

```
$ npm run deploy
```

## License

[MIT](LICENSE)