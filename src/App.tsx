import './App.css';
import React, { Component } from 'react';
import UserProvider from './providers/UserProvider';
import Application from './components/Application';

class App extends Component {
  // Properties

  // Lifecycle methods

  // HTML
  render () {
    return (
      <UserProvider>
        <Application />
      </UserProvider>
    );
  }

  // Methods
}

export default App;
