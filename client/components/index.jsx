import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewRow from './ReviewRow';
import BodyWrapper from '../styles/Body.style';
import FilterContainer from './FilterContainer';

axios.defaults.baseURL = '/reviews-module';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: window.location.pathname.slice(1) || 1,
      // productId: 1,
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }
  getReviews() {
    axios.get(`/reviews/${this.state.productId}`)
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
        <FilterContainer />
        {
          this.state.reviews.map(review => (
            <ReviewRow review={review} key={review.reviewId} />))
        }
      </BodyWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));

