const mysql = require('mysql');
const parse = require('csv-parse/lib/sync.js');
const fs = require('fs');

const usersCsv = fs.readFileSync('./users.csv', 'utf8');
const reviewsCsv = fs.readFileSync('./reviews.csv', 'utf8');

const productRecords = [...Array(101).keys()].slice(1).map(item => [item]);
const userRecords = parse(usersCsv).slice(1);
const reviewRecords = parse(reviewsCsv).slice(1);

const productHeaders = 'id';
const userHeaders = 'nickname, active_since, age, body_type, athletic_type, city, state, country';
const reviewHeaders = 'created_at, title, details, fit, rating, what_you_like, what_you_didnt_like, voted_helpful, voted_not_helpful, inappropriate, user_id, product_id';

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'lululemon',
});

conn.connect();

conn.query(`INSERT INTO products (${productHeaders}) VALUES ?`, [productRecords], (err) => {
  if (err) throw err;

  conn.query(`INSERT INTO users (${userHeaders}) VALUES ?`, [userRecords], (err2) => {
    if (err2) throw err2;

    conn.query(`INSERT INTO reviews (${reviewHeaders}) VALUES ?`, [reviewRecords], (err3) => {
      if (err3) throw err3;
      conn.end();
    });
  });
});
