import React from 'react';
import FitIndicator from './FitIndicator.jsx';

const LeftSideContainer = ({ review }) => {
  const {
    nickname, rating, city, state, country, athleticType,
    age, bodyType, whatYouLike, whatYouDidntLike, fit,
  } = review;

  let ratingImg;
  if (rating === 1) { ratingImg = 'rating1stars.gif'; }
  if (rating === 2) { ratingImg = 'rating2stars.gif'; }
  if (rating === 3) { ratingImg = 'rating3stars.gif'; }
  if (rating === 4) { ratingImg = 'rating4stars.gif'; }
  if (rating === 5) { ratingImg = 'rating5stars.gif'; }

  return (
    <div className="left-side-container">
      <img src={ratingImg} alt="star rating" />
      <div className="nickname-container">
        <span className="nickname">{nickname}</span>
      </div>
      <div className="user-info">
        <span className="user-info-label">LOCATION:&nbsp;</span>
        <span className="user-info-value">{`${city}, ${state.toUpperCase()}, ${country}`}</span>
      </div>
      <div className="user-info">
        <span className="user-info-label">ATHLETIC TYPE:&nbsp;</span>
        <span className="user-info-value">{athleticType}</span>
      </div>
      <div className="user-info">
        <span className="user-info-label">AGE:&nbsp;</span>
        <span className="user-info-value">{age}</span>
      </div>
      <div className="user-info">
        <span className="user-info-label">BODY TYPE:&nbsp;</span>
        <span className="user-info-value">{bodyType}</span>
      </div>
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
    </div>
  );
};


export default LeftSideContainer;

