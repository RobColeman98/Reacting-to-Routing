import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
      
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => this.setState({ movie: obj }));
  }

  render() {
    return (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Title: {this.state.movie.title}</div>
        <div className="card-body">
          <h5 className="card-title">Producer: {this.state.movie.producer}</h5>

          <p className="card-text">Synopsis: {this.state.movie.description}</p>
          <Link to={`/movies/${this.state.movie.id}`}>
           
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
