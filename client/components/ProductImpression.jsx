import React from 'react';
import FitIndicator from './FitIndicator.jsx';


const ProductImpression = ({ whatYouLike, whatYouDidntLike, fit }) => (
  <div>

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

  </div>
);

export default ProductImpression;
