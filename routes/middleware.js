const ValidateAppClient = require('app/Http/Middleware/ValidateAppClient')

// Middleware global
const appClient = ValidateAppClient.handler

module.exports = {
  appClient,
}
