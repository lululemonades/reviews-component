import React from 'react';
import UserInfoBox from './UserInfoBox.jsx';
import ReviewDetailsBox from './ReviewDetailsBox.jsx';
import ReviewInteractor from './ReviewInteractor.jsx';

const ReviewRow = props => (
  <div className="review-row">
    <UserInfoBox review={props.review} />
    <div className="right-side-container">
      <ReviewDetailsBox review={props.review} />
      <ReviewInteractor />
    </div>
  </div>
);

export default ReviewRow;
