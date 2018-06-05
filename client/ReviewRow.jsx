import React from 'react';
import UserInfoBox from './UserInfoBox.jsx';
import ReviewDetailsBox from './ReviewDetailsBox.jsx';
import ReviewInteractor from './ReviewInteractor.jsx';

const ReviewRow = ({review}) => (
  <div className="review-row">
    <UserInfoBox review={review} />
    <div className="right-side-container">
      <ReviewDetailsBox review={review} />
      <ReviewInteractor review={review} />
    </div>
  </div>
);

export default ReviewRow;
