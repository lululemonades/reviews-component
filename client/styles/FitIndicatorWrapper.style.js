import styled from 'styled-components';

const FitIndicatorWrapper = styled.section`
.fit-indicator {
  color: #777777;
  margin-bottom: 20px;
  box-sizing: border-box;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
}

.fit-slider-wrapper {
  display: flex;
  align-items: center;
}

.fit-slider-header{
  margin-bottom: 5px;
  color: #777777;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
}

.fit-slider-img {
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background: url(public/fitSlider.gif) no-repeat right 3px;
  background-size: auto;
  box-sizing: border-box;
  display: block;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 9px;
  */letter-spacing: 2px;
  line-height: 19.5px;
  position: relative;
  text-align: left;
  width: 170px;
}

.slider-overlay {
  background-image: url(https://lululemon.ugc.bazaarvoice.com/static/7834redes/filledSlider.png);
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-origin: padding-box;
  background-position-x: 100%;
  background-position-y: 0px; 
  background-size: auto;
  box-sizing: border-box;
  display: block;
  height: 9px;
  width: 48px;
}

.fit-slider-label-1 {
  box-sizing: border-box;
  color:  rgb(153, 153, 153);
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  letter-spacing: normal;
  line-height: 21px;
  text-transform: capitalize;
  padding-right: 12px;
}

.fit-slider-label-2 {
  font-size: 14px;
  color: #999999; 
  width: 55px;
  text-align: left;
  text-transform: capitalize;
  font-weight: 100;
  letter-spacing: 0;
  padding-left: 12px;
}
`;

export default FitIndicatorWrapper;
