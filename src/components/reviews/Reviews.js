import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter((review) => review.restaurantId === this.props.restaurantId);
    const mappedReviews = reviews.map((review, index) => {
      return <Review review={review} key={index} store={this.props.store} />
    });

    return (
      <ul>
        {mappedReviews}
      </ul>
    );
  }
};

export default Reviews;
