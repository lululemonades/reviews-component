import React from 'react';

const UserInfoBox = ({ review }) => {
  const {
    nickname, rating, city, state, country, athleticType,
    age, bodyType, whatYouLike, whatYouDidntLike,
  } = review;

  let ratingImg;
  if (rating === 1) { ratingImg = 'rating1stars.gif'; }
  if (rating === 2) { ratingImg = 'rating2stars.gif'; }
  if (rating === 3) { ratingImg = 'rating3stars.gif'; }
  if (rating === 4) { ratingImg = 'rating4stars.gif'; }
  if (rating === 5) { ratingImg = 'rating5stars.gif'; }

  return (
    <div className="user-info-box">
      <img src={ratingImg} alt="star rating" />
      <div className="nickname-container">
        <span className="nickname">{nickname}</span>
      </div>
      <div className="location">{`${city}, ${state.toUpperCase()}, ${country}`}</div>
      <div className="athletic-type">{athleticType}</div>
      <div className="age">{age}</div>
      <div className="body-type">{bodyType}</div>
      <div className="what-you-like">{whatYouLike}</div>
      <div className="what-you-didnt-like">{whatYouDidntLike}</div>
    </div>
  );
};

export default UserInfoBox;

