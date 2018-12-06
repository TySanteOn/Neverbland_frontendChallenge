import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch, Link } from "react-router-dom";

import ShowDetail from "./components/ShowDetail";
import NotFound from "./components/NotFound";
import Intro from "./components/Intro";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount = () => {
    fetch('http://api.tvmaze.com/schedule/')
      .then(r => r.json())
      .then(this.parseMovies);
  }

  parseMovies = (data) => {
    this.setState({
      shows: data
    });
  }

  render() {
    const { shows } = this.state;
    
    return (
      <div className="App">
        <header>
          <Link to="/"><h1>TV Bland</h1></Link>
        </header>
        <Switch>
          <Route path="/" exact render={() => <Intro shows={shows} />} />

          <Route path="/show/:id" render={({ match }) => {
              const showId = match.params.id;
              return <ShowDetail showId={showId} />;
            }} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
