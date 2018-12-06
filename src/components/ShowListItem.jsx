import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";


const ShowsListItem = ({ episode }) => {
  
  return <li>
      <article className="show">
        <Link className="show-link" to={`/show/${episode.show.id}`}>
          <h4>{episode.show.name}</h4>
          <Rating rating={episode.show.rating.average} />
          <img src={episode.show.image.medium} className="show-cover" alt="showImage" width=""/>
        </Link>
      </article>
    </li>;
};

ShowsListItem.propTypes = {
  episode: propTypes.object.isRequired
};

export default ShowsListItem;