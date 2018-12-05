import React from 'react';
import propTypes from 'prop-types';

// import { Link } from "react-router-dom";


const MovieDetail = ({ movie }) => {

  return <section className="movie">
    <h3>{movie}</h3>
  </section>;
}

MovieDetail.propTypes = {
  movies: propTypes.object.isRequired
};

export default MovieDetail;