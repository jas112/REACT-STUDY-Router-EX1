import React, { Component } from 'react';
import ChipBagImage from '../../assets/Chips.png'
import './Chip.css';


class Chip extends Component {
    render() {
        return (
            <div className='Chip'>
                <img className='Chip-img' style={{transform: this.props.orientation}} src={ChipBagImage} alt='Photo by Unknown Artist ' />
            </div>
        )
    }
}

export default Chip;