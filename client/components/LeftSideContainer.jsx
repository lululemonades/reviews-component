import React from 'react';
import FitIndicator from './FitIndicator.jsx';
import UserInfoContainer from './UserInfoContainer.jsx';
import LeftSideContainerWrapper from '../styles/LeftSideContainer.style.js';

const LeftSideContainer = ({ review }) => {
  const {
    nickname, rating, whatYouLike, whatYouDidntLike, fit,
  } = review;

  console.log('this is review')
  console.log(review);

  let ratingImg;
  if (rating === 1) { ratingImg = 'rating1stars.gif'; }
  if (rating === 2) { ratingImg = 'rating2stars.gif'; }
  if (rating === 3) { ratingImg = 'rating3stars.gif'; }
  if (rating === 4) { ratingImg = 'rating4stars.gif'; }
  if (rating === 5) { ratingImg = 'rating5stars.gif'; }

  return (
    <LeftSideContainerWrapper>
      <img src={ratingImg} alt="star rating" />
      <div className="nickname-container">
        <span className="nickname">{nickname}</span>
      </div>
      <UserInfoContainer review={review} />
      { whatYouLike &&
      <div className="user-likes">
        <span className="user-likes-label">What You Like</span>
        <span className="user-likes-value">{whatYouLike}</span>
      </div>
      }
      { whatYouDidntLike &&
      <div className="user-likes">
        <span className="user-likes-label">What You Didn't Like</span>
        <span className="user-likes-value">{whatYouDidntLike}</span>
      </div>
      }
      {fit && <FitIndicator fit={fit} />}
    </LeftSideContainerWrapper>
  );
};


export default LeftSideContainer;

