// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(response => {
                this.setState( {people: response.people} )
            })
    }

    render(){
        let people = this.state.people.map( person => person.name ).join(', ')
        return <div>{people}</div>
    }
}

export default App