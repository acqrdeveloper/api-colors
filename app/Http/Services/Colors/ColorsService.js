'use strict'

const Color = require('app/Http/Models/Colors/Color')

class ColorsService {
  /**
   * Obtener una lista de colores o un  solo color
   * @param colorId
   * @return {Promise<{message: string, result: *}>}
   */
  static async getColors({ colorId }) {
    // Set variables
    let result = null
    let message = null

    if (colorId) {
      // Encontrar un solo color
      const founded = Color.find((item) => item.id == colorId)
      // if (!founded) throw new Error('Color not found')

      result = founded || {}
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
    // Catch error
    if (Object.keys(payload).length < 1) throw new Error('payload is empty')

    // Agregar objeto al arreglo de colores
    Color.push(payload)

    // Response
    return {
      message: 'created color',
      result: payload,
    }
  }

  /**
   * Actualizar color
   * @param colorId
   * @param payload
   * @return {Promise<{message: string, result: *}>}
   */
  static async updateColor({ colorId, payload }) {
    // Catch error
    if (Object.keys(payload).length < 1) throw new Error('payload is empty')

    // Encontrar color
    let founded = Color.find((item) => item.id == colorId)
    if (!founded) throw new Error('Color not found')

    // Iterar la estructura del objeto
    for (const item in payload) {
      // Los cambios se realizaran en base a la reactividad de js y de manera dinámica segun la estructura del objeto
      founded[item] = payload[item]
    }

    // Response
    return {
      message: 'updated color',
      result: founded,
    }
  }
}

module.exports = ColorsService
