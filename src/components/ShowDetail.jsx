import React, { Component } from "react";
import propTypes from 'prop-types';
import NotFound from "./NotFound";
import PrimaryInfo from "./PrimaryInfo";
import ShowInfo from "./ShowInfo";
import Cast from "./Cast";

class ShowDetail extends Component {
  constructor({ showId }) {
    super();
    this.state = {
      showId: showId,
      show: {},
      cast: []
    }
  }

  componentDidMount = () => {
    fetch(`http://api.tvmaze.com/shows/${this.state.showId}`)
      .then(r => r.json())
      .then(this.parseShowData);
  }

  parseShowData = data => {
    this.setState({ show: data });

    fetch(`http://api.tvmaze.com/shows/${this.state.showId}/cast`)
      .then(r => r.json())
      .then(this.parseShowCastData);
  };

  parseShowCastData = data => {
    this.setState({ cast: data });
  };

  render() {
    const { show, cast } = this.state;
    
    if (show.name !== "Not Found") {
      return <section className="show-detail">
          <PrimaryInfo show={show} />
          <div className="extra-info row">
            <ShowInfo show={show} />
            <Cast cast={cast} />
          </div>
        </section>;
    } else {
      return <NotFound />;
    }
  };
}

ShowDetail.propTypes = {
  showId: propTypes.string.isRequired
};

export default ShowDetail;