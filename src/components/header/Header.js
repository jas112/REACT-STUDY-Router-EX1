import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
          <Link to='/' className='Header-navLink'>V-MACHINE</Link><br/>
          <Link to='/chips' className='Header-navLink'>CHIPS</Link>
          <Link to='/sardines' className='Header-navLink'>SARDINES</Link>
          <Link to='/soda' className='Header-navLink'>SODA</Link>
          {/* React Router Exercise B End */}
        </div>
      </div>
    )
  }
}

export default Header;