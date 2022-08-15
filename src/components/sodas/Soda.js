import React, { Component } from 'react';
import SodaCan1 from '../../assets/coke-soda-can.png';
import SodaCan2 from '../../assets/pepsi-soda-can.png';
import SodaCan3 from '../../assets/crush-soda-can.png';
import './Soda.css';

class Soda extends Component {
  render() {

    let images = [SodaCan1, SodaCan2, SodaCan3];
    let selectedSodaCan = images[this.props.image];

    return (
        <img className='Soda-img' style={{transform: this.props.orientation}} src={selectedSodaCan} alt='Photo by Unknown Artist ' />
    )
  }
}

export default Soda;