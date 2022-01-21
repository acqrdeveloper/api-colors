const router = require('express').Router()
const ColorsController = require('app/Http/Controllers/Colors/ColorsController')

/**
 * Test colors
 */
router.get('/colores', ColorsController.getColors)
router.get('/colores/:id', ColorsController.getColors)
router.post('/colores', ColorsController.createColor)
router.put('/colores/:id', ColorsController.updateColor)
router.delete('/colores/:id', ColorsController.deleteColor)

module.exports = router
