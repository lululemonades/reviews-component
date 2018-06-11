import React from 'react';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const overlayWidths = {
  secondSkin: '24px',
  tight: '48px',
  snug: '72px',
  justRight: '96px',
  roomy: '120px',
  oversized: '144px',
  flowy: '168px',
};

const FitIndicator = props => (
  <div className="fit-indicator">
    <div className="fit-slider-header">Fit:&nbsp;</div>
    <div className="fit-slider-label-1">Fitted</div>
    <div className="fit-slider-img">
      <div className="slider-overlay" width={overlayWidths[props.fit]} />
    </div>
    <div className="fit-slider-label-2">Loose</div>
  </div>
);

// <img
//  src={`ratingSlider${capitalize(props.fit)}.gif`}
//  alt={props.fit}
//  title={props.fit}
// />


export default FitIndicator;
