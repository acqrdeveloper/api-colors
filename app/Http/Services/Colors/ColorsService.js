'use strict'

const Color = require('app/Http/Models/Colors/Color')

class ColorsService {
  /**
   * Obtener una lista de colores o un  solo color
   * @return {Promise<{message: string, result: *}>}
   */
  static async getColors({ colorId }) {
    // Set variables
    let result = null
    let message = null

    if (colorId) {
      // Encontrar un solo color
      const founded = Color.find((item) => item.id == colorId)
      if (founded) {
        result = founded
      } else {
        result = {}
      }
      message = 'single color'
    } else {
      // Listar colores
      result = Color
      message = 'all colors'
    }

    // Response
    return {
      message,
      result,
    }
  }

  /**
   * Crear color
   * @param payload
   * @return {Promise<{message: string, result: *}>}
   */
  static async createColor({ payload }) {
    // Agregar objeto al arreglo de colores
    Color.push(payload)

    // Response
    return {
      message: 'created color',
      result: payload,
    }
  }
}

module.exports = ColorsService
