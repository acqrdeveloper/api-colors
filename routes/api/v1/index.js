// Middleware
const { appClient } = require('routes/middleware')

// Public Modules App
const PublicRouter = require('routes/api/v1/Public/PublicRouter')

// Version
const version = `/api/v1`

// Exportar rutas
module.exports = (app) => {
  app.use(version, [PublicRouter])
}
