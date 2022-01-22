'use strict'

const app = require('../bootstrap/app.js')
const request = require('supertest')

/**
 * Test para obtener una lista de colores
 */
test('all colors', async () => {
  const res = await request(app).get('/api/v1/colores')
  expect(res.status).toBe(200)
  expect.objectContaining({
    code: expect.any(Number),
    success: expect.any(Boolean),
    createdAt: expect.any(Number),
    message: expect.any(String),
    method: expect.any(String),
    result: expect.any(Array),
  })
})

/**
 * Test para obtener datos de un color
 */
test('single color', async () => {
  // Request
  const colorId = 1

  // API
  const res = await request(app).get(`/api/v1/colores/${colorId}`)

  // Test
  expect(res.status).toBe(200)
  expect.objectContaining({
    code: expect.any(Number),
    success: expect.any(Boolean),
    createdAt: expect.any(Number),
    message: expect.any(String),
    method: expect.any(String),
    result: expect.any(Object),
  })
})

/**
 * Test para crear un color
 */
test('create color', async () => {
  // Request
  const payload = { id: 15, name: 'plateado', year: 2000, color: '#98B2D1', pantone_value: '15-4020' }

  // API
  const res = await request(app).post('/api/v1/colores').send(payload)

  // Test
  expect(res.status).toBe(200)
  expect.objectContaining({
    code: expect.any(Number),
    success: expect.any(Boolean),
    createdAt: expect.any(Number),
    message: expect.any(String),
    method: expect.any(String),
    result: expect.any(Object),
  })
})

/**
 * Test para actualizar un color
 */
test('update color', async () => {
  // Request
  const colorId = 1
  const payload = { id: 1, name: 'ceruleanssss', year: 2000, color: '#98B2D1', pantone_value: '15-4020' }

  // API
  const res = await request(app).put(`/api/v1/colores/${colorId}`).send(payload)

  // Test
  expect(res.status).toBe(200)
  expect.objectContaining({
    code: expect.any(Number),
    success: expect.any(Boolean),
    createdAt: expect.any(Number),
    message: expect.any(String),
    method: expect.any(String),
    result: expect.any(Object),
  })
})

/**
 * Test para eliminar un color
 */
test('delete color', async () => {
  // Request
  const colorId = 1

  // API
  const res = await request(app).delete(`/api/v1/colores/${colorId}`)

  // Test
  expect(res.status).toBe(200)
  expect.objectContaining({
    code: expect.any(Number),
    success: expect.any(Boolean),
    createdAt: expect.any(Number),
    message: expect.any(String),
    method: expect.any(String),
    result: expect.any(Object),
  })
})
