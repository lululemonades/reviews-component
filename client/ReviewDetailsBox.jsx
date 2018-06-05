import React from 'react';

const ReviewDetailsBox = props => (
  <div className="review-details-box">
    <div className="created-at"> {props.review.createdAt.toLocaleString().split('T')[0]} </div>
    <div className="title"> {props.review.title} </div>
    <div className="details"> {props.review.details} </div>
  </div>
);

export default ReviewDetailsBox;
