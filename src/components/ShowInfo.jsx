import React from 'react';

import propTypes from "prop-types";


const ShowInfo = ({show}) => {

  const lister = (array) => {
    const newArray = [];
    array.forEach(day => {
      const $day = `${day}, `;
      newArray.push($day);      
    })

    if (newArray.length > 0) {
      let lastOne = newArray.pop();
      lastOne = lastOne.slice(0, (lastOne.length - 2));
      newArray.push(lastOne);
      return newArray;
    }

    return '/';
    
  };

  console.log(show);

  if (show.network && show.schedule && show.status && show.genres) {

    return <article className="show-info">
        <header>
          <h4>Show Info</h4>
        </header>
        <dl nowrap="true">
          <div className="row show-info-list">
            <dd>Streamed on</dd>
            <dt>{show.network.name}</dt>
          </div>
          <div className="row show-info-list">
            <dd>Schedule</dd>
            <dt>{lister(show.schedule.days)}</dt>
          </div>
          <div className="row show-info-list">
            <dd>Status</dd>
            <dt>{show.status}</dt>
          </div>
          <div className="row show-info-list">
            <dd>Genres</dd>
            <dt>{lister(show.genres)}</dt>
          </div>
        </dl>
      </article>;
  }

  return 0;
  
}

ShowInfo.propTypes = {
  show: propTypes.object.isRequired
};

export default ShowInfo;