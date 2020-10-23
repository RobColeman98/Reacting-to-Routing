import React from "react";
import { Link } from "react-router-dom"

// import

let PeopleCredits = (props) => {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">Name: {props.person.name}</div>
      <div className="card-body">
        <h5 className="card-title">Age: {props.person.age}</h5>
        <p className="card-text">Gender: {props.person.gender}</p>
        <Link to={`/people/${props.person.id}`}>
        <button type="button" class="btn btn-outline-warning">See More!</button>
        </Link>
      </div>
    </div>
  );
};

export default PeopleCredits
