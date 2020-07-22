const DDD = require('../../src/model/ddd');
describe('DDD', async () => {
  it('should be return DDD json', async () => {
    const newDDD = await DDD.CreateDDD('041');
    console.log(newDDD);
    expect(newDDD).toBeDefined();
  });
});