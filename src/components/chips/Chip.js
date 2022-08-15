import React, { Component } from 'react';
import ChipBag1 from '../../assets/lays-classic-chip-bag.png';
import ChipBag2 from '../../assets/doritos-nacho-cheese-chip-bag.png';
import ChipBag3 from '../../assets/lays-bbq-chip-bag.png';
import ChipBag4 from '../../assets/doritos-ranch-chip-bag.png';
import ChipBag5 from '../../assets/lays-scao-chip-bag.png';
import './Chip.css';


class Chip extends Component {
    render() {

        let images = [ChipBag1, ChipBag2, ChipBag3, ChipBag4, ChipBag5];
        let selectedChipBag = images[this.props.image];
        
        return (
            <div className='Chip'>
                <img className='Chip-img' style={{transform: this.props.orientation}} src={selectedChipBag} alt='Photo by Unknown Artist ' />
            </div>
        )
    }
}

export default Chip;