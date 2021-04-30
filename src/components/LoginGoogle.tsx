import React, { Component } from 'react';
import { firebase, googleProvider } from '../firebase';
import { UserContext } from '../providers/UserProvider';

class LoginGoogle extends Component {
  static contextType = UserContext

   constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  render () {
    const user = this.context.user;

    return (
      <div>
        {
          user.loggedIn
          ? <LogoutButton onClick={this.handleLogout} />
          : <LoginButton onClick={this.handleLogin} />
        }
      </div>
    );
  }

  // Methods
  async handleLogin () {
    try {
      // Login successful
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      await firebase.auth().signInWithPopup(googleProvider);
    } catch (err) {
      console.log(err);
    }
  }

  async handleLogout () {
    try {
      // Logout successful
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  }
}

function LoginButton (props: any) {
  return (
    <button onClick={props.onClick}>
      Login Google+
    </button>
  );
}

function LogoutButton (props: any) {
  return (
    <button onClick={props.onClick}>
      Logout Google+
    </button>
  );
}

export default LoginGoogle;
