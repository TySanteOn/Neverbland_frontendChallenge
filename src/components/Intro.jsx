import React from 'react';
import propTypes from 'prop-types';

import AllShows from "./AllShows";


const Intro = ({shows}) => {
  console.log(shows);
  
  return <section className="home">
      <header className="introduction">
        <h2>TV Show and web series database.</h2>
        <p>Create personalised schedules. Episode guide, cast, crew and character information.</p>
      </header>
      <AllShows shows={shows} />
    </section>;
}

Intro.propTypes = {
  shows: propTypes.array.isRequired
};

export default Intro;