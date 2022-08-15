import React, { Component } from 'react';
import SardineCan1 from '../../assets/mari-helin-sardine-can-1.png';
import SardineCan2 from '../../assets/mari-helin-sardine-can-2.png';
import './Sardines.css';

class Sardines extends Component {
  render() {

    let images = [SardineCan1, SardineCan2]
    let selectedSardineCan = images[this.props.image]

    return (
        <img className='Sardines-img' style={{transform: this.props.orientation}} src={selectedSardineCan} alt='Photo by MariHelin on Unsplash' title='Photo by MariHelin on Unsplash' />
    )
  }
}

export default Sardines;