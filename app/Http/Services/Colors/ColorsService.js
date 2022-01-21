'use strict'

const Helper = require('app/Http/Utils/Helper')
const Color = require('app/Http/Models/Colors/Color')

class ColorsService {
  static async getColors({}) {
    // Query where
    // Query model
    const result = Color

    // Response
    return {
      message: 'all colors',
      result: result,
    }
  }
}

module.exports = ColorsService
