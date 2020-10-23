import React, { Component, Fragment } from "react";
// import "isomorphic-fetch";
// import "es6-promise";
import MovieTimeline from "./MovieTimeline";
import PeopleTimeline from "./PeopleTimeline";
import GhibliLogo from "../logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PeopleCredits from "./PeopleCredits";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import SinglePeople from "./SinglePeople";

class App extends Component {
  state = {
    loadMovies: false,
    movies: [],
    loadPeople: false,
    people: [],
  };

  render() {
    return (
      <Router>
        <img src={GhibliLogo} alt="studioGhibliLogo" />
        <Link className="mx-1" to="/">
          <button type="button" class="btn btn-secondary">
            Go Home!
          </button>
        </Link>

        <Link className="movie-button" to="/movies">
          <button type="button" class="btn btn-secondary">
            Go to View Movies!
          </button>
        </Link>

        <Link className="people-button" to="/people">
          <button type="button" class="btn btn-secondary">
            Go to View People!
          </button>
        </Link>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movies" component={MovieTimeline}></Route>
          <Route path="/movies/:id" component={SingleMovie}></Route>
          <Route exact path="/people" component={PeopleTimeline}></Route>
          <Route exact path="/people/:id" component={SinglePeople}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
