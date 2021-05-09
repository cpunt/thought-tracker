import React, { Component } from 'react';
import { UserContext } from '../providers/UserProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Sidebar from './Sidebar';
import Home from './Home';
import CreateThought from './CreateThought';
import CreateCategory from './CreateCategory';

import '../css/main.css';

class Application extends Component {
  // Properties
  static contextType = UserContext

  // Lifecycle methods

  // HTML
  render () {
    const user = this.context.user;
    return (
      <Router>
        <div className='flex-box main-bg-color'>
          <Sidebar />
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/create/thought' component={CreateThought} />
            <Route path='/create/category' component={CreateCategory} />
          </Switch>
        </div>
      </Router>
    )
  }

  // Methods
}

export default Application;
