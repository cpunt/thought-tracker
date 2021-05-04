import React, { Component } from 'react';
import { UserContext } from '../providers/UserProvider';
import Login from './Login';
import ThoughtForm from './ThoughtForm';

class Application extends Component {
  // Properties
  static contextType = UserContext
  
  // Lifecycle methods

  // HTML
  render () {
    const user = this.context.user;
    return (
      <div>
        <Login />
        {user.loggedIn &&
          <ThoughtForm />
        }
      </div>
    )
  }

  // Methods
}

export default Application;
