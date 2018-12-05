import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

import AllMovies from "./components/AllMovies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    }
  }

  componentDidMount = () => {
    fetch('http://api.tvmaze.com/schedule/full')
      .then(r => r.json())
      .then(this.parseMovies);
  }

  parseMovies = (data) => {
    this.setState({
      movies: data
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header>
          <Link to="/"><h1>TV Bland</h1></Link>
        </header>
        <Switch>
          <Route path="/" exact render={() => <AllMovies movies={movies} />} />

          <Route path="/movie/:id" render={({ match }) => {
              const id = match.params.id;
              return movies[id] ? <MovieDetail movie={movies[id]} id={id} /> : <NotFound />;
            }} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
