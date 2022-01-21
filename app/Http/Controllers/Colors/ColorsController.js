'use strict'

const Helper = require('app/Http/Utils/Helper')
const ColorsService = require('app/Http/Services/Colors/ColorsService')

class ColorsController {
  /**
   *
   * @param req
   * @param res
   * @returns {Promise<*|boolean|void>}
   */
  static async getColors(req, res) {
    const method = '[ColorsController.getColors]'

    try {
      // Request
      const {} = req.body
      const {} = req.query
      const {} = req.params

      // Service
      const response = await ColorsService.getColors({})

      // Response
      return Helper.response({ req, res }, { method, ...response })
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }
}

module.exports = ColorsController
