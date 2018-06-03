import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewRow from './ReviewRow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }
  getReviews() {
    // axios.get('/reviews', {params: {productId: this.state.productId}})
    axios.get(`/reviews/${this.state.productId}/`)
      .then((res) => {
        this.setState({
          reviews: [...res.data]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log('Reviews to render: ', this.state.reviews);
    return (
      <div>
        {
          this.state.reviews.map(review => (
            <ReviewRow review={review} key={review.review_id} />))
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

