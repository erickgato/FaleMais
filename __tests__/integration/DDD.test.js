const request = require('supertest')
const app = require('../../src/app')

const DDD = '041';
describe('Test ddd controller actions', () => {
  it('should create ddd', async () => {
    const response = await request(app)
    .post('/ddds')
    .send(`ddd=${DDD}`);

    expect(response.status).toBe(201);
  })
  it(' should return ddd ', async () => {
      
  })
})