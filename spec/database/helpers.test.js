const h = require('../../database/helpers.js');

test('adds 1 + 2 to equal 3', () => {
  expect(h.snakeToCamel('hello_world_im_here')).toBe('helloWorldImHere');
});

test('adds 1 + 2 to equal 3', () => {
  expect(h.camelToSnake('helloWorldImHere')).toBe('hello_world_im_here');
});