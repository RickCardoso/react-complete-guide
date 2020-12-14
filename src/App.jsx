import React, { Component } from 'react'; 

import 'App.css';
import { PersonList } from 'components/PersonList';
import { Cockpit } from 'components/Cockpit';
import { AuthContext } from 'store/auth';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('[App.jsx] constructed!');
  }

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
    isAuthenticated: false,
  };

  static getDerivedStateFromProps (props, state) {
    console.log('[App.jsx] state got from props', props);
    return state;
  }

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

  authenticate = () => {
    this.setState({ isAuthenticated: true });
  }

  render () {
    console.log('[App.jsx] rendering…');

    const context = {
      isAuthenticated: this.state.isAuthenticated,
      authenticate: this.authenticate
    };

    return (
      <AuthContext.Provider value={context}>
        <Cockpit
          title={this.props.appTitle}
          togglePeople={this.togglePeopleHandler}
          authenticate={this.authenticate} />
        {this.state.showPeople && <PersonList
          people={this.state.people}
          changeName={this.nameChangeHandler}
          deletePerson={this.deletePersonHandler}
          isAuthenticated
        /> }
      </AuthContext.Provider>
    );
  }

  componentDidMount () {
    console.log('[App.jsx] did mount');
  }

  componentDidUpdate () {
    console.log('[App.jsx] updated');
  }
}

export default App;
