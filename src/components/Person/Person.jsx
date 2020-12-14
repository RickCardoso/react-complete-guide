import React from 'react';

import { AuthContext } from 'store/auth';

export class Person extends React.Component {
  static getDerivedStateFromProps (props, state) {
    console.log('[Person.jsx] state got from props', props);
    return state;
  }

  static contextType = AuthContext;

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[Person.jsx] should component update', nextProps);
    return true;
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('[Person.jsx] get snapshot before update', prevProps);
    return null;
  }

  componentDidUpdate () {
    console.log('[Person.jsx] updated');
  }

  render () {
    console.log('[Person.jsx] rendering…');
    return (
      <>
        {(this.context.isAuthenticated) ?
          <div>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years youngs!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name} />
          </div>
        :
          <p>Please authenticate!</p>
        }
      </>
    );
  }

  componentWillUnmount () {
    console.log('[Person.jsx] will unmount');
  }
};