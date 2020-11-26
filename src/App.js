import React, { Component } from 'react'; 

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        name: 'Carol',
        age: 47,
        hobbies: 'play volleyball'
      },
      {
        name: "Matt",
        age: 19
      },
      {
        name: "Yuri",
        age: 91
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      ...this.state,
      people: [
        {
          name: newName,
          age: 49,
          hobbies: 'play volleyball on the beach'
        }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      ...this.state,
      people: [
        {
          name: event.target.value,
          age: 49,
          hobbies: 'play volleyball on the beach'
        }
      ]
    });
  }

  render () {
    const peopleComponents = this.state.people.map((p, index) => {
      let hobbies = '';
      if (!!p.hobbies) hobbies = `My hobbies are: ${p.hobbies}!`;
      return (
        <Person
          click={this.switchNameHandler.bind(this, 'Anna')}
          change={this.nameChangeHandler}
          name={p.name}
          age={p.age}
          key={index}>
          {hobbies}
        </Person>
      );
    });

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Anna')}>Switch name</button>
        {peopleComponents}
      </div>
    );
  }
}

export default App;
