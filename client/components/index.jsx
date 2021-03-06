import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewRow from './ReviewRow.jsx';
import BodyWrapper from '../styles/Body.style.js';

axios.defaults.baseURL = '/reviews-module';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: window.location.search.slice(1),
      productId: 1,
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }
  getReviews() {
    axios.get(`/reviews/${this.state.productId}/`)
      .then((res) => {
        this.setState({
          reviews: [...res.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <BodyWrapper>
        {
          this.state.reviews.map(review => (
            <ReviewRow review={review} key={review.reviewId} />))
        }
      </BodyWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));

