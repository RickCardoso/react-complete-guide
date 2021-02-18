import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Error404 extends Component {
  render () {
    return (
      <div>
        <h1>404 Error</h1>
        <p>Page not found</p>
        <button onClick={() => this.props.history.goBack()}>Voltar</button>
      </div>
    )
  }
}

export default withRouter(Error404);