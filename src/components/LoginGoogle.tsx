import React, { Component } from 'react';
import { firebase, googleProvider } from '../firebase';

class LoginGoogle extends Component <{}, { user: any }> {
   constructor(props: any) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { user: null };
  }

  componentWillMount() {
    this.setUser();
  }

  render () {
    return (
      <div>
        {
          this.state.user
          ? <LogoutButton onClick={this.handleLogout} />
          : <LoginButton onClick={this.handleLogin} />
        }
      </div>
    );
  }

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

  setUser () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
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
