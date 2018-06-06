const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../database/db.js');
// why doesn't './database.db.js' work here?

const app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get('/reviews/:productId/', (req, res) => {
  db.getReviews(req.params.productId, (reviews) => {
    res.status(200).send(reviews);
  });
});

app.put('/reviews', (req, res) => {
  const { reviewId, field, value } = req.body;
  db.updateReview(reviewId, field, value, (_) => {
    res.status(204).end();
  });
});

app.listen(3000, () => console.log('Listening on port 3000...'));

