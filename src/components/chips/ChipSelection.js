import React, { Component } from 'react';
import Chip from './Chip';
import { v4 as uuidv4 } from 'uuid';

class ChipSelection extends Component {

    constructor(props){
        super(props);
        this.state = {
            chips: JSON.parse(window.localStorage.getItem('chips') || '[]'),
            chipCount: JSON.parse(window.localStorage.getItem('chipCount') || '0'),
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    generateOrientation(){

        let rotationAngle = Math.random() * 90 - 45;
        let xPosition = Math.random() * 40 - 20;
        let yPosition = Math.random() * 40 - 20;

        let orientation = `translate(${xPosition}px, ${yPosition}px) rotate(${rotationAngle}deg)`;

        return orientation;
    }

    generateChipSelection(){
        let chipsSelection = this.state.chips.map(chipBag => {
            <Chip key={chipBag.id} orientation={chipBag.orientation} />
        });
        return chipsSelection;
    }

    handleClick(){
        let newChipSelection = {};
        let chipTransform = this.generateOrientation();
        newChipSelection['id'] = uuidv4();
        newChipSelection['orientation'] = chipTransform;
        console.log(`newChipSelection => ${JSON.stringify(newChipSelection)}`);
        let newChips = [...this.state.chips, newChipSelection];

        this.setState({chips: newChips, chipCount: this.state.chipCount+=1}, () => {
            console.log(`Updating local storage...`);
            window.localStorage.setItem('chips', JSON.stringify(this.state.chips));
            window.localStorage.setItem('chipCount', JSON.stringify(this.state.chipCount));
        });
    }

    handleReset(){
        window.localStorage.setItem('chips', '[]');
        window.localStorage.setItem('chipCount', '0');

        this.setState({chips: [], chipCount: 0});
    }

  render() {

    let chips = this.generateChipSelection();
    return (
        <div>
            <h1 className='pageTitle'>Chips</h1>
            <div className='pageDetail'>Plenty of crispy snacks to go around!!!</div>
            <div className='content-box'>
                <div className='content-box-display'>
                <div className='Chips-display'>
                    {chips}
                </div>
                <div className='Chips-console'>
                    <button className='' onClick={this.handleClick}>NOM NOM</button>
                    <button className='' onClick={this.handleReset}>RESET</button>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ChipSelection;