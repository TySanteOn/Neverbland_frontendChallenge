import React, { Component } from "react";
import propTypes from 'prop-types';
import NotFound from "./NotFound";
import PrimaryInfo from "./PrimaryInfo";

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
      return <section className="showDetail">
          <PrimaryInfo show={show} />
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