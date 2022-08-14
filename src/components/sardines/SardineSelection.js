import React, { Component } from 'react';
import Sardines from './Sardines';
import { v4 as uuidv4 } from 'uuid';
import './SardineSelection.css';

class SardineSelection extends Component {

    static defaultProps = {
        imageAssets: ['mari-helin-sardine-can-1', 'mari-helin-sardine-can-2'],
    }

    constructor(props){
        super(props);
        this.state = {
            sardines: JSON.parse(window.localStorage.getItem('sardines') || '[]'),
            sardinesCount: JSON.parse(window.localStorage.getItem('sardinesCount') || '0'),
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

    generateSardineSelection(){
        let sardineCanSelection = this.state.sardines.map(sardineCan => {
            <Sardines key={sardineCan.id} orientation={sardineCan.orientation} image={sardineCan.image} />
        });
        return sardineCanSelection;
    }

    handleClick(){
        let newSardineCanSelection = {};
        let sardineTransform = this.generateOrientation();
        newSardineCanSelection['id'] = uuidv4();
        newSardineCanSelection['orientation'] = sardineTransform;
        let randomIdx = Math.floor(Math.random()*this.props.imageAssets.length);
        console.log(`randomIdx: ${randomIdx}`);
        newSardineCanSelection['image'] = this.props.imageAssets[randomIdx];
        console.log(`newSardineCanSelection => ${JSON.stringify(newSardineCanSelection)}`);
        let newSardines = [...this.state.sardines, newSardineCanSelection];

        this.setState({sardines: newSardines, sardinesCount: this.state.sardinesCount+=1}, () => {
            console.log(`Updating local storage...`);
            window.localStorage.setItem('sardines', JSON.stringify(this.state.sardines));
            window.localStorage.setItem('sardinesCount', JSON.stringify(this.state.sardinesCount));
        });
    }

    handleReset(){
        window.localStorage.setItem('sardines', '[]');
        window.localStorage.setItem('sardinesCount', '0');

        this.setState({sardines: [], sardinesCount: 0});
    }

  render() {
    return (
        <div>
            <h1 className='pageTitle'>Sardines</h1>
            <div className='pageDetail'>Yummy eats make a savory treat!!!</div>
            <div className='content-box'>
                <div className='content-box-display'>
                <div className='SardinesSelection-display'>

                </div>
                <div className='SardinesSelection-console'>
                    <button className='' onClick={this.handleClick}>YUM YUM</button>
                    <button className='' onClick={this.handleReset}>RESET</button>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SardineSelection;