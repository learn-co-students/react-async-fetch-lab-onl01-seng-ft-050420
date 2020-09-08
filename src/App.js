import React, { Component } from 'react'

export default class App extends Component {
  state = {
    spaceFarers: []
  }

  render() {
    return (
      <div>
        {this.state.spaceFarers.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          spaceFarers: data.people
        })
      })
  }
}
