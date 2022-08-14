import React, { Component } from 'react';
import './Chip.css';

class Chip extends Component {
    render() {
        let imgSrc = `../../assets/Chips.PNG`;
        return (
            <div className='Chip'>
            <img style={{transform: this.props.orientation}} src={imgSrc} alt='Photo by Unknown Artist ' />
            </div>
        )
    }
}

export default Chip;