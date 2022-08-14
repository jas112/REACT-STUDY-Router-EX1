import React, { Component } from 'react';
import Chip from './Chip';
import { v4 as uuidv4 } from 'uuid';

class ChipSelection extends Component {

    static defaultProps = {
        imageAssets: ['mari-helin-sardine-can-1', 'mari-helin-sardine-can-2'],
    }

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
            <Chip key={chipBag.id} orientation={chipBag.orientation} image={chipBag.image} />
        });
        return chipsSelection
    }

    handleClick(){
        let newChipSelection = {};
        let chipTransform = this.generateOrientation();
        newChipSelection['id'] = uuidv4();
        newChipSelection['orientation'] = chipTransform;
        let randomIdx = Math.floor(Math.random()*this.props.imageAssets.length);
        console.log(`randomIdx: ${randomIdx}`);
        newChipSelection['image'] = this.props.imageAssets
        let newChips = [...this.state.chips, newChipSelection];

        this.setState({chips: newChips, chipCount: this.state.chipCount+=1}, () => {
            console.log(`Udating local storage...`);
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
    return (
        <div>
            <h1 className='pageTitle'>Chips</h1>
            <div className='pageDetail'>Plenty of crispy snacks to go around!!!</div>
            <div className='content-box'>
                <div className='content-box-display'>
                <div className='Chips-display'>

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