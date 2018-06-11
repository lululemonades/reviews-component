import React from 'react';
import axios from 'axios';

class ReviewInteractor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votedHelpful: this.props.review.votedHelpful,
      votedNotHelpful: this.props.review.votedNotHelpful,
      inappropriate: this.props.review.inappropriate,
      id: this.props.review.reviewId,
    };
    this.updateReview = this.updateReview.bind(this);
  }
  updateReview(e) {
    const { className } = e.target;
    axios.put('/reviews', {
      reviewId: this.state.id,
      field: className,
      value: this.state[className] + 1,
    })
      .then(() => {
        console.log('You’ve successfully left feedback on this review!');
        this.setState(prevState => (
          { [className]: prevState[className] + 1 }
        ));
      });
  }
  render() {
    const { votedHelpful, votedNotHelpful } = this.state;
    return (
      <div className="review-interactor">
        <span className="prefix">Was this review helpful to you?</span>
        <span className="positive">
          <span className="votedHelpful" onClick={this.updateReview}>Yes</span>
          {" ( "} 
          <span>{votedHelpful}</span>
          {" ) "}
        </span>
        <span className="negative">
          <span className="votedNotHelpful" onClick={this.updateReview}>No</span>
          {" ( "}
          <span>{votedNotHelpful}</span>
          {" ) "}
        </span>
        <span className="inappropriate" onClick={this.updateReview}>Report as inappropriate</span>
      </div>
    );
  }
}

export default ReviewInteractor;
