import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

class MovieTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => {
        this.setState({ movies: obj });
      });
  }
  render() {
    //figure out how to reference the movie array, map over it, pass it to MovieCard component
    return this.state.movies.map((movie) => (
      <h1>
        <MovieCard movie={movie} />
      </h1>
    ));
  }
}

export default MovieTimeline;
