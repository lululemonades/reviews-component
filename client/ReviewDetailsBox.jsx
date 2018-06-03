import React from 'react';

const ReviewDetailsBox = props => (
  <div className="review-details-box">
    <div className="reviewed-at"> {new Date().toLocaleString()} </div>
    <div className="title"> {props.review.title} </div>
    <div className="details"> {props.review.details} </div>
  </div>
);

export default ReviewDetailsBox;
