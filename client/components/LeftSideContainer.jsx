import React from 'react';
import UserInfoContainer from './UserInfoContainer.jsx';
import ProductImpression from './ProductImpression.jsx';
import Nickname from './Nickname.jsx';
import LeftSideContainerWrapper from '../styles/LeftSideContainer.style.js';

const LeftSideContainer = ({ review }) => {
  const {
    nickname, rating, whatYouLike, whatYouDidntLike, fit,
  } = review;

  let ratingImg;
  if (rating === 1) { ratingImg = 'https://lululemon.ugc.bazaarvoice.com/7834redes/1_0/5/rating.gif'; }
  if (rating === 2) { ratingImg = 'https://lululemon.ugc.bazaarvoice.com/7834redes/2_0/5/rating.gif'; }
  if (rating === 3) { ratingImg = 'https://lululemon.ugc.bazaarvoice.com/7834redes/3_0/5/rating.gif'; }
  if (rating === 4) { ratingImg = 'https://lululemon.ugc.bazaarvoice.com/7834redes/4_0/5/rating.gif'; }
  if (rating === 5) { ratingImg = 'https://lululemon.ugc.bazaarvoice.com/7834redes/5_0/5/rating.gif'; }

  return (
    <LeftSideContainerWrapper>
      <img src={ratingImg} alt="star rating" />
      <Nickname nickname={nickname} />
      <UserInfoContainer review={review} />
      <ProductImpression
        whatYouLike={whatYouLike}
        whatYouDidntLike={whatYouDidntLike}
        fit={fit}
      />
    </LeftSideContainerWrapper>
  );
};


export default LeftSideContainer;

