import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../css/sidebar.css';


class Links extends Component {
  // Properties

  // Lifecycle methods

  // HTML
  render () {
    return (
      <div className='links-div'>
        <Link to='/' className='link'>
          <p className='link-header'>Home</p>
        </Link>
        <Link to='/create/thought' className='link'>
          <p className='link-header'>Create Thought</p>
        </Link>
        <Link to='/create/category' className='link'>
          <p className='link-header'>Create Category</p>
        </Link>
      </div>
    )
  }

 // Methods
}

export default Links;
