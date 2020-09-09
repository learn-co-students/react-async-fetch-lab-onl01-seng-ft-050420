// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        people: []
    };

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(response => {
            this.setState( {people: response.people})
        })
    }

    render(){
        let people = this.state.people.map ( person => person.name).join(',')
        return(
            <div>
                <p>{people}</p>
            </div>
        )
    };
};
