import styled from 'styled-components';

const ReviewInteractorWrapper = styled.div`
  .review-interactor {
    width: 730px;
    height: auto;
    padding-top: 25px;
    background-image: url(https://lululemon.ugc.bazaarvoice.com/static/7834redes/dottedBorder.gif);
    background-position-x: left;
    background-position-y: top;
    background-size: initial;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: transparent;
  }

  .review-interactor-prefix {
    float: left;
    padding-right: 20px;
    font-weight: 100;
  }

  .thumbs-up {
    color: #938454;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    padding-right: 3px;
  }

  .thumbs-down {
    color: #938454;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    text-transform: uppercase;
    cursor: pointer;
    padding-right: 3px;
  }

  .thumbs-up::after, .thumbs-down::after {
    font-size: 13px;
    color: #938454;
    content: '|';
    margin-left: 15px;
    margin-right: 15px;
  }

  .inappropriate {
    color: #938454;
    text-transform: uppercase;
    line-height: 1;
    cursor: pointer;
    font-size: 13px;
    margin-top: 2px;
    padding-bottom: 30px;
  }
`;

export default ReviewInteractorWrapper;