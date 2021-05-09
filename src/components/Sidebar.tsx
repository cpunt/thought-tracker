import React, { Component } from 'react';
import User from './sidebar/User';
import Links from './sidebar/Links';
import '../css/sidebar.css';


class Sidebar extends Component {
  // Properties

  // Lifecycle methods

  // HTML
  render () {
    return (
      <div className='sidebar-outer-div'>
        <div className='sidebar-inner-div'>
          <User />
          <Links />
        </div>
      </div>
    )
  }

  // Methods
}

export default Sidebar;
