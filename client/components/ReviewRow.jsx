import React from 'react';
import UserInfoBox from './UserInfoBox.jsx';
import ReviewDetailsBox from './ReviewDetailsBox.jsx';
import ReviewInteractor from './ReviewInteractor.jsx';
import ReviewRowWrapper from '../styles/ReviewRow.style.js';

const ReviewRow = ({review}) => (
  <ReviewRowWrapper>
    <UserInfoBox review={review} />
    <div className="right-side-container">
      <ReviewDetailsBox review={review} />
      <ReviewInteractor review={review} />
    </div>
  </ReviewRowWrapper>
);

export default ReviewRow;
