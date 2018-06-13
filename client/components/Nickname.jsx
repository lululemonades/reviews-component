import React from 'react';
import NicknameWrapper from '../styles/Nickname.style.js';

const Nickname = ({ nickname }) => (
  <NicknameWrapper>
  <div className="nickname-container">
    <span className="nickname">{nickname}</span>
  </div>
  </NicknameWrapper>
);

export default Nickname;
