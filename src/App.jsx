import React, { Component } from 'react'; 

import 'App.css';
import { PersonList } from 'components/PersonList';
import { Cockpit } from 'components/Cockpit';

class App extends Component {
  state = {
    people: [
      {
        id: 'rid1231',
        name: 'Carol',
        age: 47,
        hobbies: 'play volleyball'
      },
      {
        id: 'rid1232',
        name: "Matt",
        age: 19
      },
      {
        id: 'rid1233',
        name: "Yuri",
        age: 91
      }
    ],
    showPeople: false,
  };

  deletePersonHandler = (index) => {
    const currentPeople = [...this.state.people];
    currentPeople.splice(index, 1);

    this.setState({
      people: currentPeople
    });
  }

  nameChangeHandler = (event, id) => {
    const currentPeople = [...this.state.people];
    const person = currentPeople.find((p) => p.id === id);

    if (!person) return null;

    person.name = event.target.value;

    this.setState({
      people: currentPeople
    });
  }

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople })
  }

  render () {
    return (
      <div className="App">
        <Cockpit
          togglePeople={this.togglePeopleHandler} />
        {this.state.showPeople && <PersonList
          people={this.state.people}
          changeName={this.nameChangeHandler}
          deletePerson={this.deletePersonHandler}
        /> }
      </div>
    );
  }
}

export default App;
