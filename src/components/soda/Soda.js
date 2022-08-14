import React, { Component } from 'react';

class Soda extends Component {
    constructor(props){
        super(props);
        this.state = {
            sodas: JSON.parse(window.localStorage.getItem('sodas') || '[]'),
            sodaCount: JSON.parse(window.localStorage.getItem('sodaCount') || '0'),
        }
        this.getASoda = this.getASoda.bind(this);
    }

    generateOrientation(){

        let rotationAngle = Math.random() * 90 - 45;
        let xPosition = Math.random() * 40 - 20;
        let yPosition = Math.random() * 40 - 20;

        let orientation = `translate(${xPosition}px, ${yPosition}px) rotate(${rotationAngle}deg)`;

        return orientation;
    }

    getASoda(){
        let newSodaSelection = {};
        let sodaTransform = this.generateOrientation();
        newSodaSelection['orientation'] = sodaTransform;
        let newSodas = [...this.state.sodas, newSodaSelection];

        this.setState({sodas: newSodas, sodaCount: this.state.sodaCount+=1}, () => {
            console.log(`Updating local storage...`);
            window.localStorage.setItem('sodas', JSON.stringify(this.state.sodas));
            window.localStorage.setItem('sodaCount', JSON.stringify(this.state.sodaCount));
        });
    }

    resetSodas(){
        window.localStorage.setItem('sodas', '[]');
        window.localStorage.setItem('sodaCount', '0');

        this.setState({sodas: [], sodaCount: 0});
    }

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