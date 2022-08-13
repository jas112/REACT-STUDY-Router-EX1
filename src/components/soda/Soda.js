import React, { Component } from 'react';

class Soda extends Component {
  render() {
    return (
        <div>
            <h1 className='pageTitle'>Soda</h1>
            <div className='pageDetail'>Too much fizzy sugar drinks!!!</div>
            <div className='content-box'>
                <div className='content-box-display'></div>
            </div>
        </div>
    )
  }
}

export default Soda;