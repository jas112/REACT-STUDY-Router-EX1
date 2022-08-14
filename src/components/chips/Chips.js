import React, { Component } from 'react';

class Chips extends Component {
    constructor(props){
        super(props);
        this.state = {
            chips: JSON.parse(window.localStorage.getItem('chips') || '[]'),
            chipCount: JSON.parse(window.localStorage.getItem('chipCount') || '0'),
        }
        this.getBagOfChips = this.getBagOfChips.bind(this);
    }

    generateOrientation(){

        let rotationAngle = Math.random() * 90 - 45;
        let xPosition = Math.random() * 40 - 20;
        let yPosition = Math.random() * 40 - 20;

        let orientation = `translate(${xPosition}px, ${yPosition}px) rotate(${rotationAngle}deg)`;

        return orientation;
    }

    getBagOfChips(){
        let newChipSelection = {};
        let chipTransform = this.generateOrientation();
        newChipSelection['orientation'] = chipTransform;
        let newChips = [...this.state.chips, newChipSelection];

        this.setState({chips: newChips, chipCount: this.state.chipCount+=1}, () => {
            console.log(`Udating local storage...`);
            window.localStorage.setItem('chips', JSON.stringify(this.state.chips));
            window.localStorage.setItem('chipCount', JSON.stringify(this.state.chipCount));
        });
    }

    resetChips(){
        window.localStorage.setItem('chips', '[]');
        window.localStorage.setItem('chipCount', '0');

        this.setState({jokes: [], currJoke: {}});
    }

  render() {
    return (
        <div>
            <h1 className='pageTitle'>Chips</h1>
            <div className='pageDetail'>Plenty of crispy snacks to go around!!!</div>
            <div className='content-box'>
                <div className='content-box-display'></div>
            </div>
        </div>
    )
  }
}

export default Chips;