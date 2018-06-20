const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('../database/db.js'); // why doesn't './database.db.js' work here?

const app = express();

/* ******** MIDDLEWARE ************************ */
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log('Lukes\'s server recieved this request: ', req.originalUrl);
  next();
});
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/reviews-module', express.static(path.join(__dirname, '../public')));
// app.use('/reviews-module', (req, res, next) => {
//   // console.log('req.originalUrl', req.originalUrl);
//   // let newUrl = req.originalUrl.split('/').slice(2).join('/');
//   // req.originalUrl = '/' + newUrl;
//   // console.log(req.originalUrl);
//   next();
// });

/* ******** ROUTING *************************** */
app.get('/reviews-module/reviews/:productId/', (req, res) => {
  db.getReviews(req.params.productId, (reviews) => {
    res.status(200).send(reviews);
  });
});
app.put('/reviews-module/reviews', (req, res) => {
  const { reviewId, field, value } = req.body;
  console.log('received put request with: ', reviewId, field, value);
  db.updateReview(reviewId, field, value, () => {
    res.status(204).end();
  });
});

/* ******************************************** */

module.exports = app;
