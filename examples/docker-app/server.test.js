const request = require('supertest');
const app = require('./server');

describe('Docker Demo App', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from Docker CI/CD Pipeline!');
    expect(response.body.version).toBe('1.0.0');
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body).toHaveProperty('uptime');
  });

  test('POST /api/calculate should perform addition', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ operation: 'add', a: 5, b: 3 });
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8);
  });

  test('POST /api/calculate should handle division by zero', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ operation: 'divide', a: 10, b: 0 });
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('Cannot divide by zero');
  });

  test('POST /api/calculate should return error for invalid operation', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ operation: 'invalid', a: 5, b: 3 });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Invalid operation');
  });
});