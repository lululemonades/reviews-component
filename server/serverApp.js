const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('../database/db.js'); // why doesn't './database.db.js' work here?

const app = express();

/* ******** MIDDLEWARE ************************ */
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/reviews/public', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

/* ******** ROUTING *************************** */
app.get('/reviews/:productId/', (req, res) => {
  db.getReviews(req.params.productId, (reviews) => {
    res.status(200).send(reviews);
  });
});
app.put('/reviews', (req, res) => {
  const { reviewId, field, value } = req.body;
  db.updateReview(reviewId, field, value, () => {
    res.status(204).end();
  });
});

/* ******************************************** */

module.exports = app;
