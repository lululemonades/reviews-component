import React from 'react';
import ReviewDetailsBox from './ReviewDetailsBox.jsx';
import ReviewInteractor from './ReviewInteractor.jsx';

const RightSideContainer = ({ review }) => (
  <div className="right-side-container">
    <ReviewDetailsBox review={review} />
    <ReviewInteractor review={review} />
  </div>
);

export default RightSideContainer;
