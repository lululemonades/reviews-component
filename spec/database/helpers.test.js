const h = require('../../database/helpers.js');

describe('Test the case converions', () => {
  test('adds 1 + 2 to equal 3', (done) => {
    expect(h.snakeToCamel('hello_world_im_here')).toBe('helloWorldImHere');
    done();
  });
  test('adds 1 + 2 to equal 3', (done) => {
    expect(h.camelToSnake('helloWorldImHere')).toBe('hello_world_im_here');
    done();
  });
});

