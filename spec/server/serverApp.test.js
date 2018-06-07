const request = require('supertest');
const app = require('../../server/serverApp.js');

describe('Server endpoint tests', () => {
  test('It should respond to the GET method', () => {
      return request(app).get('/reviews/1/').expect(200);
  });
  // test('Should respond to GET method to base endpoint', () => {
  //   return request(app).get('reviews/1/').then((response) => {
  //     expect(response.statusCode).toBe(200);
  //   });
  // });
  // test.skip('Should respond to GET method to general enpoint', () => {
  //   return request(app).get('/api/room/50/general/').then((response) => {
  //     expect(response.statusCode).toBe(200);
  //   });
  // });
  // test.skip('Should respond to GET method to amenities enpoint', () => {
  //   return request(app).get('/api/room/50/amenities/').then((response) => {
  //     expect(response.statusCode).toBe(200);
  //   });
  // });
});
