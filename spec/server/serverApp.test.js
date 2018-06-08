const request = require('supertest');
const app = require('../../server/serverApp.js');

describe('Test the endpoints', () => {
  test ('It should response GETs to the /reviews endpoint', () => {
    return request(app).get('/reviews/1/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
  test ('It should response GETs to the root endpoint', () => {
    return request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});

