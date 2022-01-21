'use strict'

require('dotenv').config()
require('module-alias/register')

/**
 * Express
 */
const express = require('express')
const app = express()

/**
 * Middleware
 */
require('config/helmet')(app)
require('config/cors')(app)
app.set('trust proxy', true)
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true, limit: '2mb' }))
app.use(express.static('public'))

/**
 * Router
 */
require('routes/api/v1')(app)

/**
 * Listen port
 */
const port = process.env.PORT
app.listen(port, () => {
  console.log('[Info]', `Server nodejs started in ${process.env.NODE_APP_URL}`)
})

if (process.env.NODE_ENV === 'production') {
  console.log = function () {}
}

module.exports = app
