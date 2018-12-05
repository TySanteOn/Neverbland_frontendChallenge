import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


const ShowsListItem = ({ episode }) => {
  // const ratingFill = ;
  if (episode.show.rating.average) {
    rating
    console.log(episode.show.rating.average);
  }
  
  // const ratingStyle = `fill: green`;
  return <li>
      <article className="episode">
        <Link className="episode-link" to={`/show/${episode.show.id}`}>
          <h3>{episode.show.name}</h3>
          <img style="fill: green" src="./stars.svg" alt="" width="200"/>
          <img src={episode.show.image.medium} alt="showImage"/>
        </Link>
      </article>
    </li>;
};

ShowsListItem.propTypes = {
  episode: propTypes.object.isRequired
};

export default ShowsListItem;