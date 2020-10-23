import React, { Component } from "react";
import { Link, Route } from "react-router-dom";


class SinglePeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
    };
  }

  componentDidMount() {
      
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => {
        this.setState({ people: obj });
      });
  }

  render() {
      return(
        <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Name: {this.state.people.name}</div>
        <div className="card-body">
          <h5 className="card-title">Age: {this.state.people.age}</h5>
          <p className="card-text">Gender: {this.state.people.gender}</p>
          
          <Link to={`/people/${this.state.people.id}`}>
              
          </Link>
        </div>
      </div>
      );
  }
}
export default SinglePeople;