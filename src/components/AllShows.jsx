import React from 'react';
import propTypes from 'prop-types';

import ShowListItem from "./ShowListItem"


const AllShows = ({shows}) => {
  
  return <section className="allShows">
    <header><h3>Last Added Shows</h3></header>
    <ul className="shows-list">
      {Object.keys(shows).map(id => <ShowListItem key={id} id={id} episode={shows[id]} />)}
      </ul>
  </section>;
}

AllShows.propTypes = {
  shows: propTypes.array.isRequired
};

export default AllShows;