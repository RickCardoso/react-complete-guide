import React, { Component } from 'react'; 

import './App.css';
import Person from './Person/Person';

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
    const peopleComponents = this.state.showPeople && this.state.people.map((p, index) => {
      let hobbies = '';
      if (!!p.hobbies) hobbies = `My hobbies are: ${p.hobbies}!`;
      return (
        <Person
          click={this.deletePersonHandler.bind(this, index)}
          change={(event) => this.nameChangeHandler(event, p.id)}
          name={p.name}
          age={p.age}
          key={p.id}>
          {hobbies}
        </Person>
      );
    });

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePeopleHandler}>Toggle</button>
        {peopleComponents}
      </div>
    );
  }
}

export default App;
