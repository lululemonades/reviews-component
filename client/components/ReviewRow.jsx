import React from 'react';
import LeftSideContainer from './LeftSideContainer.jsx';
import RightSideContainer from './RightSideContainer.jsx';
import ReviewRowWrapper from '../styles/ReviewRow.style.js';

const ReviewRow = ({ review }) => (
  <ReviewRowWrapper>
    <LeftSideContainer review={review} />
    <RightSideContainer review={review} />
  </ReviewRowWrapper>
);

export default ReviewRow;
