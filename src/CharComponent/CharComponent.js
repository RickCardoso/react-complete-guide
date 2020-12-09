import React from 'react';
import './CharComponent.css';

class CharComponent extends React.Component {
  render () {
    return (
      <div className="char-component" onClick={this.props.onClick}>
        {this.props.char}
      </div>
    );
  }
}

export default CharComponent;