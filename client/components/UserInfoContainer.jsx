import React from 'react';
import UserInfoEntry from './UserInfoEntry.jsx';

const UserInfoContainer = ({
  review: {
    city, state, country, athleticType, age, bodyType,
  },
}) => (
  <div>
    <UserInfoEntry label="LOCATION" value={`${city}, ${state.toUpperCase()}, ${country}`} />
    <UserInfoEntry label="ATHLETIC TYPE" value={athleticType} />
    <UserInfoEntry label="AGE" value={age} />
    <UserInfoEntry label="BODY TYPE" value={bodyType} />
  </div>
);

export default UserInfoContainer;
