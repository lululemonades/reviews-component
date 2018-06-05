const mysql = require('mysql');

const config = {
  database: 'lululemon',
  user: 'root',
};

const conn = mysql.createConnection(config);
conn.connect();

const getReviews = function (productId, callback) {
  const query =
    `SELECT 
      *, 
      reviews.id AS reviewId, 
      users.id AS userId, 
      users.athletic_type AS athleticType, 
      users.body_type AS bodyType,
      users.active_since AS memberSince,
      reviews.what_you_like AS whatYouLike, 
      reviews.what_you_didnt_like AS whatYouDidntLike,
      reviews.voted_helpful AS votedHelpful,
      reviews.voted_not_helpful AS votedNotHelpful,
      reviews.created_at AS createdAt
    FROM reviews
    LEFT JOIN users ON reviews.user_id=users.id
    WHERE reviews.product_id=${productId};`;

  conn.query(query, (err, result) => {
    if (err) { throw err; }
    callback(result);
  });
};

const updateReview = function({ reviewId, field, value }) {
  const query = ``;
}

module.exports = {
  getReviews,
  updateReview,
};

