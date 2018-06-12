import React from 'react';

const createLongDate = function (datetime) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(datetime.toLocaleString().split('T')[0]);
  return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const ReviewDetailsBox = props => (
  <div className="review-details-box">
    <span className="created-at"> {createLongDate(props.review.createdAt)} </span>
    <div className="title"> {props.review.title} </div>
    <div className="details"> {props.review.details} </div>
  </div>
);

export default ReviewDetailsBox;
