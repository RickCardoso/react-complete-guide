import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: ''
  };

  handleChange (event) {
    this.setState({
      text: event.target.value
    });
  }

  handleCharClick (index) {
    const currentText = this.state.text.split('');

    currentText.splice(index, 1);

    this.setState({
      text: currentText.join('')
    });
  }

  render() {
    const chars = this.state.text.split('').map((char, index) => {
      return <CharComponent
        char={char}
        onClick={this.handleCharClick.bind(this, index)}
        key={index}
      />
    });

    return (
      <div>
        <div className="App">
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        </div>
        <div className="Assignment-content">
          <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
          <p>{this.state.text}</p>
          <ValidationComponent text={this.state.text} />

          <div className="Chars-content">
            {chars}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
