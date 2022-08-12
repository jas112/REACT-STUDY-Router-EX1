import React, { Component } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className='Header-console'>
        <Link to='/' className='Header-navLink'>ABOUT</Link>
        <Link to='/droid' className='Header-navLink'>DROID</Link>
        <Link to='/contact' className='Header-navLink'>CONTACT</Link>
      </div>
    )
  }
}

export default Header;