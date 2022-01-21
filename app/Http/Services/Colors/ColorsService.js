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
      const founded = Color.find((item) => item.id == colorId)
      if (founded) {
        result = founded
      } else {
        result = {}
      }
      message = 'single color'
    } else {
      result = Color
      message = 'all colors'
    }

    // Response
    return {
      message,
      result,
    }
  }
}

module.exports = ColorsService
