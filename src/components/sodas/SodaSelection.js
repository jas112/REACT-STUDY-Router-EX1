import React, { Component } from 'react';
import Soda from './Soda';
import { v4 as uuidv4 } from 'uuid';
import './SodaSelection.css';

class SodaSelection extends Component {
    constructor(props){
        super(props);
        this.state = {
            sodas: JSON.parse(window.localStorage.getItem('sodas') || '[]'),
            sodaCount: JSON.parse(window.localStorage.getItem('sodaCount') || '0'),
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    generateOrientation(){

        let rotationAngle = Math.random() * 90 - 45;
        let xPosition = Math.random() * 20 - 10;
        let yPosition = Math.random() * 20 - 10;

        let orientation = `translate(${xPosition}px, ${yPosition}px) rotate(${rotationAngle}deg)`;

        return orientation;
    }

    generateSodaSelection(){
        let sodasSelection = this.state.sodas.map(sodaCan => (
            <Soda key={sodaCan.id} orientation={sodaCan.orientation} image={sodaCan.image} />
        ));
        return sodasSelection
    }

    handleClick(){
        let newSodaSelection = {};
        let sodaTransform = this.generateOrientation();
        newSodaSelection['id'] = uuidv4();
        newSodaSelection['orientation'] = sodaTransform;
        let randomIdx = Math.floor(Math.random()*3);
        console.log(`randomIdx: ${randomIdx}`);
        newSodaSelection['image'] = randomIdx;
        console.log(`newSodaSelection => ${JSON.stringify(newSodaSelection)}`);
        let newSodas = [...this.state.sodas, newSodaSelection];

        this.setState({sodas: newSodas, sodaCount: this.state.sodaCount+=1}, () => {
            console.log(`Updating local storage...`);
            window.localStorage.setItem('sodas', JSON.stringify(this.state.sodas));
            window.localStorage.setItem('sodaCount', JSON.stringify(this.state.sodaCount));
        });
    }

    handleReset(){
        window.localStorage.setItem('sodas', '[]');
        window.localStorage.setItem('sodaCount', '0');

        this.setState({sodas: [], sodaCount: 0});
    }

  render() {

    let sodaCanSelection = this.generateSodaSelection();
    return (
        <div>
            <h1 className='pageTitle'>Soda</h1>
            <div className='pageDetail'>{this.state.sodaCount <= 0 ? 'Too much fizzy sugar drinks!!!' : `You have drunk ${this.state.sodaCount} cans of pop!!!`}</div>
            <div className='content-box'>
                <div className='content-box-display'>
                    <div className='SodaSelection-display'>
                        {sodaCanSelection}
                    </div>
                    <div className='SodaSelection-console'>
                        <button className='SodaSelection-Btn' onClick={this.handleClick}>AHHH!!!</button>
                        <button className='SodaSelection-Btn' onClick={this.handleReset}>RESET</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SodaSelection;