import React, {Fragment} from "react";
import PeopleCredits from "./PeopleCredits";

class PeopleTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people/")
      .then((res) => res.json())
      // .then(res => console.log(res))
      .then((obj) => {
        this.setState({ people: obj });
      });
  }

  render() {
    return this.state.people.map((person) => (
        <PeopleCredits person={person} />
    )
    );
  }
}

export default PeopleTimeline;
