const mysql = require('mysql');

const config = {
  database: 'lululemon',
  user: 'root'
};

const conn = mysql.createConnection(config);
conn.connect();

const getReviews = function (productId, callback) {
  const query =
    `SELECT *, reviews.id AS review_id, users.id AS user_id
    FROM reviews
    LEFT JOIN users ON reviews.user_id=users.id
    WHERE reviews.product_id=${productId};`;

  conn.query(query, (err, result) => {
    if (err) { throw err; }
    callback(result);
  });
};

module.exports = {
  getReviews
};

