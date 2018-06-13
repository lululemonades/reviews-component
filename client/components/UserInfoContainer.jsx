import React from 'react';
import UserInfoWrapper from '../styles/UserInfoContainer.style.js';

const UserInfoContainer = ({
  review: {
    city, state, country, athleticType, age, bodyType,
  },
}) => (
  <div>
    <UserInfoWrapper>
      <span className="user-info-label">LOCATION:&nbsp;</span>
      <span className="user-info-value">{`${city}, ${state.toUpperCase()}, ${country}`}</span>
    </UserInfoWrapper>
    <UserInfoWrapper>
      <span className="user-info-label">ATHLETIC TYPE:&nbsp;</span>
      <span className="user-info-value">{athleticType}</span>
    </UserInfoWrapper>
    <UserInfoWrapper>
      <span className="user-info-label">AGE:&nbsp;</span>
      <span className="user-info-value">{age}</span>
    </UserInfoWrapper>
    <UserInfoWrapper>
      <span className="user-info-label">BODY TYPE:&nbsp;</span>
      <span className="user-info-value">{bodyType}</span>
    </UserInfoWrapper>
  </div>
);

export default UserInfoContainer;
