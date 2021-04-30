import React, { Component } from 'react';
import { firebase } from '../firebase';
import { UserType } from '../types/general';

export const UserContext = React.createContext({ user: new UserType(false) });
class UserProvider extends Component {
  public state = {
    user: new UserType(false)
  };

  componentWillMount () {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        this.setState({ 'user': new UserType(true, user.displayName, user.email) });
      } else {
        this.setState({ 'user': new UserType(false) });
      }
    });
  }

  render () {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
