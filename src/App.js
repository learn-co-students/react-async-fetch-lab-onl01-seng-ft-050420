import React from "react";

export default class App extends React.Component {
  state = {
    peopleInSpace: [],
  };

  render() {
    return (
      <div>{this.state.peopleInSpace.map((x) => `<div>${x.name}</div>`)}</div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then((json) =>
        this.setState({
          peopleInSpace: json.people,
        })
      );
  }
}
