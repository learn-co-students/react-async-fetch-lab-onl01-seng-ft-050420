// create your App component here

import React from 'react'
import { render } from 'enzyme'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            astrosInSpace: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then((json) => {
                this.setState({astrosInSpace: json.people})
            })
    }

    render() {
        return (
            <div>
                {this.state.astrosInSpace.map(astro => astro.name)}
            </div>
        )
    }

    
}