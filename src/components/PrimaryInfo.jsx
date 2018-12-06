import React from 'react';
import Rating from './Rating';


const PrimaryInfo = ({show}) => {

  console.log(show);
  console.log(show.rating);
  
  return <header>
      <div>
        <h3>{show.name}</h3>
        {show.summary}
        {/* <Rating rating={show.rating.average} /> */}
      </div>
    </header>;
}

export default PrimaryInfo;