import React from 'react';

import propTypes from "prop-types";
import CastMember from './CastMember';


const Cast = ({cast}) => {
  let members = [];

  if (cast.length > 5) {
    for (let i = 0; i < 5; i++) {
      const random = Math.floor((Math.random(0) * (cast.length - 1)));
      members.push(cast[random]);
    }
  } else {
    members = cast;
  }

  if (cast.length !== 0) {
    return <article className="show-cast">
      <header>
        <h4>Starring</h4>
      </header>
      <dl nowrap="true">
        {members.map((member, index) => <CastMember key={index} member={member} />)}
      </dl>
    </article>;
  }
  return <p>no cast known</p>;
}

Cast.propTypes = {
  cast: propTypes.array.isRequired
};

export default Cast;