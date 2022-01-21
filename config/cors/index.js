'use strict'

const cors = require('cors')

module.exports = (app) => {
  let whiteList = null
  if (process.env.NODE_ENV === 'production') {
    whiteList = process.env.NODE_APP_URL_ORIGINS.split(',').map(item => item.trim())
  } else {
    whiteList = '*'
  }
  const corsOptions = {
    origin: whiteList,
    credentials: true,
    methods: ['GET', 'OPTIONS'],
  }
  app.use(cors(corsOptions))
}
