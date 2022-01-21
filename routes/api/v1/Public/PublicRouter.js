const router = require('express').Router()

/**
 * Tests
 */
router.post('/test/public', (req, res, next) => {
  return next()
})

module.exports = router
