import React from 'react';
import StarRatings from "react-star-ratings";

const Rating = ({ rating }) => {

  const fullColor = '#EA6149';
  const emptyColor = '#000000';

  if (rating !== null) {
    const outOfFive = (rating / 2);

    return <div id="rating-stars" className="rating">
        <StarRatings rating={outOfFive} starDimension="20px" starSpacing="12px" starRatedColor={fullColor} starEmptyColor={emptyColor} />
      </div>;
  } else {
    return <div className="rating">
        <p className="not-rated">Not yet rated.</p>
      </div>;
  }
}

export default Rating;