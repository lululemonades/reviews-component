import React from 'react';
import FitIndicator from './FitIndicator.jsx';
import ProductImpressionWrapper from '../styles/ProductImpression.style.js';


const ProductImpression = ({ whatYouLike, whatYouDidntLike, fit }) => (
  <ProductImpressionWrapper>

    { whatYouLike &&
    <div className="user-likes">
      <span className="user-likes-label">What You Like</span>
      <span className="user-likes-value">{whatYouLike}</span>
    </div>
    }

    { whatYouDidntLike &&
    <div className="user-likes">
      <span className="user-likes-label">What You Didn't Like</span>
      <span className="user-likes-value">{whatYouDidntLike}</span>
    </div>
    }

    {fit &&
      <FitIndicator fit={fit} />
    }

  </ProductImpressionWrapper>
);

export default ProductImpression;
