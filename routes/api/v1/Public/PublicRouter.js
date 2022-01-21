const router = require('express').Router()
const ColorsController = require('app/Http/Controllers/Colors/ColorsController')

/**
 * Test colors
 */
router.get('/colores', ColorsController.getColors)

module.exports = router
