import React from 'react';
import propTypes from 'prop-types';

import { Link } from "react-router-dom";


const AllMovies = ({movies}) => {

  return <section className="movies">
    <ul className="movies-list">
        {Object.keys(movies).map(id => <li className="movie" key={id}>
            <Link className="movie-link" to={`/movies/${id}`}>
              {movies[id].name}
            </Link>
          </li>)}
      </ul>
  </section>;
}

AllMovies.propTypes = {
  movies: propTypes.object.isRequired
};

export default AllMovies;