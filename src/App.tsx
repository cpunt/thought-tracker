import './App.css';
import Login from './components/Login';
import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Login />

        <header className="App-header">
          <h1>Thought Tracker</h1>
        </header>
      </div>
    );
  }
}

export default App;
