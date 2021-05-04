import React, { Component } from 'react';
import { UserContext } from '../providers/UserProvider';
import Login from './Login';

class Application extends Component {
  // Properties
  static contextType = UserContext
  // Lifecycle methods

  // HTML
  render () {
    return (
      <div>
        <Login />
      </div>
    )
  }

  // Methods
}

export default Application;
