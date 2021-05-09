import React, { Component } from 'react';
import { UserContext } from '../../providers/UserProvider';
import Login from '../Login';
import '../../css/sidebar.css';

class User extends Component {
  // Properties

  // Lifecycle methods

  // HTML
 render () {
   return (
    <div className='user-div'>
      <Login />
    </div>
   )
 }

 // Methods
}

export default User;
