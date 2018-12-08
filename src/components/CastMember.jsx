import React from 'react';

import propTypes from "prop-types";


const CastMember = ({ member }) => {

  let image;

  if (!member.person.image){
    image = '../empty-image.jpg';
  } else {
    image = member.person.image.medium;
  }

  return <div className="row extra-info-list cast-member">
    <div className="row">
      <dd>{member.person.name}</dd>
      <dt>{member.character.name}</dt>
    </div>
    <img src={image} alt="" width="50" height="50" object-fit="cover" />
  </div>;

}


CastMember.propTypes = {
  member: propTypes.object.isRequired
};

export default CastMember;