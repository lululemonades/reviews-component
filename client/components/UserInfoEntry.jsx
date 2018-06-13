import React from 'react';
import { UserInfoEntryWrapper, UserInfoLabel, UserInfoValue } from '../styles/UserInfoEntry.style.js';


const UserInfoEntry = ({ label, value }) => (
  <UserInfoEntryWrapper>
    <UserInfoLabel>{label}:&nbsp;</UserInfoLabel>
    <UserInfoValue>{value}</UserInfoValue>
  </UserInfoEntryWrapper>
);

export default UserInfoEntry;
