import React, { Component } from 'react';
import { UserContext } from '../providers/UserProvider';
import Login from './Login';

class Application extends Component {
  static contextType = UserContext

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
