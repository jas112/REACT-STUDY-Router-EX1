import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div className='Header-deck'>
        {/* <div className='Header-console'> */}
          {/* React Router Exercise A Begin */}
          {/* <Link to='/' className='Header-navLink'>ABOUT</Link> */}
          {/* <Link to='/droid' className='Header-navLink'>DROID</Link> */}
          {/* <Link to='/droid/r' className='Header-navLink'>DROID(r)</Link> */}
          {/* <Link to='/contact' className='Header-navLink'>CONTACT</Link> */}
          {/* React Router Exercise A End */}
        {/* </div> */}
        <div className='Header-console'>
          {/* React Router Exercise B Begin */}
          {/* <NavLink to='/' className={!isActive ? 'Header-navLink' : 'Header-navLink-active'}>V-MACHINE</NavLink><br/> */}
          <NavLink to='/' className={({ isActive }) => (isActive ? 'Header-navLink-active' : 'Header-navLink')}>V-MACHINE</NavLink><br/>
          <NavLink to='/chips' className={({ isActive }) => (isActive ? 'Header-navLink-active' : 'Header-navLink')}>CHIPS</NavLink>
          <NavLink to='/sardines' className={({ isActive }) => (isActive ? 'Header-navLink-active' : 'Header-navLink')}>SARDINES</NavLink>
          <NavLink to='/soda' className={({ isActive }) => (isActive ? 'Header-navLink-active' : 'Header-navLink')}>SODA</NavLink>
          {/* React Router Exercise B End */}
        </div>
      </div>
    )
  }
}

export default Header;