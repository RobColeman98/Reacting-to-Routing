import React, { Component, Fragment } from "react";
import GhibliLogo from "../logo.png";
import PeopleTimeline from "./PeopleTimeline";
import MovieTimeline from "./MovieTimeline";

const Home = () => {
  return (
    <Fragment>
      <h1>
        Welcome To Films Galore, a place where you travel through time and
        relive legendary films!
      </h1>
      <h3>Would You like to view films or movies?</h3>
    </Fragment>
  );
};

export default Home;
