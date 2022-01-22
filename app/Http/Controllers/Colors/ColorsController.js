'use strict'

const Helper = require('../../../../app/Http/Utils/Helper')
const ColorsService = require('../../../../app/Http/Services/Colors/ColorsService')

class ColorsController {
  /**
   * Obtener lista de colores
   * @param req
   * @param res
   * @returns {Promise<*|boolean|void>}
   */
  static async getColors(req, res) {
    const method = '[ColorsController.getColors]'

    try {
      // Request
      const colorId = req.params.id

      // Service
      const response = await ColorsService.getColors({ colorId })

      // Response
      return Helper.response({ req, res }, { method, ...response })
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }

  /**
   * Crear color
   * @param req
   * @param res
   * @return {Promise<*>}
   */
  static async createColor(req, res) {
    const method = '[ColorsController.createColor]'

    try {
      // Request
      const payload = req.body

      // Service
      const response = await ColorsService.createColor({ payload })

      // Response
      return Helper.response({ req, res }, { method, ...response })
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }

  /**
   * Actualizar color
   * @param req
   * @param res
   * @return {Promise<*>}
   */
  static async updateColor(req, res) {
    const method = '[ColorsController.updateColor]'

    try {
      // Request
      const colorId = req.params.id
      const payload = req.body

      // Service
      const response = await ColorsService.updateColor({ colorId, payload })

      // Response
      return Helper.response({ req, res }, { method, ...response })
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }

  /**
   * Eliminar color
   * @param req
   * @param res
   * @return {Promise<*>}
   */
  static async deleteColor(req, res) {
    const method = '[ColorsController.deleteColor]'

    try {
      // Request
      const colorId = req.params.id

      // Service
      const response = await ColorsService.deleteColor({ colorId })

      // Response
      return Helper.response({ req, res }, { method, ...response })
    } catch (e) {
      return Helper.response({ req, res }, { method, e })
    }
  }
}

module.exports = ColorsController
