import React from 'react';
import ReviewDetailsBox from './ReviewDetailsBox.jsx';
import ReviewInteractor from './ReviewInteractor.jsx';
import RightSideContainerWrapper from '../styles/RightSideContainer.style.js'

const RightSideContainer = ({ review }) => (
  <RightSideContainerWrapper>
    <ReviewDetailsBox review={review} />
    <ReviewInteractor review={review} />
  </RightSideContainerWrapper>
);

export default RightSideContainer;
