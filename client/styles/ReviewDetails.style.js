import styled from 'styled-components';

const ReviewsDetailWrapper = styled.section`
.created-at {
  text-transform: uppercase;
  border-bottom: 1px solid red;
  font-size: 11px;
  font-weight: 600;
  color: #333333;
  letter-spacing: 2px;
  width: auto;
}

.review-details-box {
  width: 730px;
}

.title {
  margin: 20px 0;
  line-height: 1.2;
  font-size: 25px;
  font-weight: 100;
}

.details {
  font-weight: 100;
  line-height: 1.3;
  margin-bottom: 25px;
  color: #666666;
}
`;

export default ReviewsDetailWrapper;