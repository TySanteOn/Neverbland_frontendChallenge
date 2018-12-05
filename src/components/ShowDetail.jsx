import React, { Component } from "react";
import propTypes from 'prop-types';
import NotFound from "./NotFound";

class ShowDetail extends Component {
  constructor({ showId }) {
    super();
    this.state = {
      showId: showId,
      show: {}
    }
  }

  componentDidMount = () => {
    fetch(`http://api.tvmaze.com/shows/${this.state.showId}`)
      .then(r => r.json())
      .then(this.parseShowData);
  }

  parseShowData = data => {
    this.setState({ show: data });
  };

  render() {
    const { show } = this.state;
    if (show.length !== null) {
      return <section className="movie">
          <h2>{show.name}</h2>
        </section>;
    } else {
      return NotFound;
    }
  };
}

ShowDetail.propTypes = {
  showId: propTypes.string.isRequired
};

export default ShowDetail;