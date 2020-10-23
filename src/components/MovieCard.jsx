import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">Title: {props.movie.title}</div>
      <div className="card-body">
        <h5 className="card-title">Producer: {props.movie.producer}</h5>
        <p className="card-text">Synopsis: {props.movie.description}</p>
        <Link to={`/movies/${props.movie.id}`}>
        <button type="button" class="btn btn-outline-warning">See More!</button>
        </Link>
      </div>
    </div>
  );
}
