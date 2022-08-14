import React, { Component } from 'react';
import './Soda.css';

class Soda extends Component {
  render() {
    let imgSrc = `../../assets/Soda.PNG`;
    return (
      <div className='Soda'>
        <img className='Soda-img' style={{transform: this.props.orientation}} src={imgSrc} alt='Photo by Unknown Artist ' />
      </div>
    )
  }
}

export default Soda;