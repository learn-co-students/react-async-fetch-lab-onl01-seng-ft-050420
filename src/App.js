// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        data: null 
    }

    handleClick = () => {

    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(response => this.setState({data: response}))
    }

    render() {
        return (
        <div className="App">
            <button onClick={this.handleClick}>Fetch!</button>
        </div>
        )

    }
}