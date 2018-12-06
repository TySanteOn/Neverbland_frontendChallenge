import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";


const ShowsListItem = ({ episode }) => {
  
  return <li>
      <article className="episode">
        <Link className="episode-link" to={`/show/${episode.show.id}`}>
          <h3>{episode.show.name}</h3>
          <Rating rating={episode.show.rating.average} />
          <img src={episode.show.image.medium} alt="showImage"/>
        </Link>
      </article>
    </li>;
};

ShowsListItem.propTypes = {
  episode: propTypes.object.isRequired
};

export default ShowsListItem;