import React from 'react';
import StarRatings from "react-star-ratings";

const Rating = ({ rating, color }) => {

  if (rating !== null) {
    const outOfFive = (rating / 2);

    return <div id="rating-stars" className="rating">
        <StarRatings rating={outOfFive} starDimension="20px" starSpacing="12px" starRatedColor={color.fullColor} starEmptyColor={color.emptyColor} />
      </div>;
  } else {
    return <div className="rating">
        <p className="not-rated">Not yet rated.</p>
      </div>;
  }
}

export default Rating;