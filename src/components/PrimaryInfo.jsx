import React from 'react';
import Rating from './Rating';

import propTypes from 'prop-types';


const PrimaryInfo = ({show}) => {

  const color = {
    fullColor: '#FFFFFF',
    emptyColor: '#000000'
  }

  const outOfFiveOnScreen = () => {
    const $rating = ratingCheck() / 2;
    
    if ($rating !== 0) {
      return `${$rating}/5`;
    }
    return;
  };

  const ratingCheck = () => {
    if (show.rating) {
      return show.rating.average;
    }
    return 0;
  };
  const imageCheck = () => {
    if (show.image) {
      return show.image.medium;
    }
    return 0;
  };

  const createMarkup = () => {
    return { __html: show.summary };
  };

  return <header className="info-header row">
      <div className="info-div">
        <div>
          <h3>{show.name}</h3>
          <div className="preview-div" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
        <div className="row">
          <Rating rating={ratingCheck()} color={color} />
          <p>{outOfFiveOnScreen()}</p>
        </div>
      </div>
      <img src={imageCheck()} alt="" width="250"/>
    </header>;
}

PrimaryInfo.propTypes = {
  show: propTypes.object.isRequired
};

export default PrimaryInfo;