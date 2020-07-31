const request = require('supertest')
const app = require('../../src/app')

const DDD = '041';
describe('Test ddd controller actions', () => {
  it('should create ddd', async () => {
    const response = await request(app)
    .post('/ddds')
    .send(`ddd=${DDD}`);

   await expect(response.status).toBe(201);
  })
  it(' should return ddd ', async () => {
      const Send = await request(app)
      .get('/ddds')
      await expect(Send).not.toBe('');
  })
  it(' should return one ddd ', async () => {
    const Send = await request(app)
    .get('/ddds')
    .send(`ddd=${DDD}`);
    await expect(Send.status).not.toBe(404);
})
  it( ' shold delete ddd', async () => {
    const response = await request(app)
    .delete('/ddds')
    .send(`ddd=${DDD}`);

   await expect(response.status).toBe(200);
  } )
})