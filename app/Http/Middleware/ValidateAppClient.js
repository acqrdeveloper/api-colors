'use strict'

const Helper = require('app/Http/Utils/Helper')
const Buffer = require('buffer').Buffer
const passportClientId = process.env.PASSPORT_PERSONAL_ACCESS_CLIENT_ID
const passportClientSecret = process.env.PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET

class ValidateAppClient {
  /**
   * Acceso a la aplición como un cliente
   * @param req
   * @param res
   * @param next
   * @returns {Promise<void>}
   */
  static async handler(req, res, next) {
    const method = '[Middleware.ValidateAppClient]'
    console.log(method)

    try {
      // Basic auth username & password
      const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
      const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')
      if (!username || !password) {
        return res.status(401).json({ message: 'User unauthorized' })
      }

      const oauthClient = () => {
        return username === passportClientId && password === passportClientSecret
      }
      if (!oauthClient) {
        return res.status(401).json({ message: 'User unauthorized' })
      }

      // Response
      return next()
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }
}

module.exports = ValidateAppClient
