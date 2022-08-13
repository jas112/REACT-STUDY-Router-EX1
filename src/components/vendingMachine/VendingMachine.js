import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './VendingMachine.css';

class VendingMachine extends Component {
  render() {

    // let imgURL = 'https://images.unsplash.com/photo-1578783204979-27a2e3de3746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
    let imgURL = 'https://images.unsplash.com/photo-1553802789-1fa70322e550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80';

    return (
        <div>
            <h1 className='pageTitle'>Vending Machine</h1>
            <div className='pageDetail'>Choose from our selection below.</div>
            <div className='content-box'>
                <div className='content-box-display VendingMachine-display'>
                    <div className='VendingMachine-display-BG'>
                        {/* <img src={imgURL} alt='Photo by Erik Mclean on Unsplash' /> */}
                        <img src={imgURL} alt='Photo Machine by Mihai Lazăr on Unsplash' />
                    </div>
                    <div className='VendingMachine-display-content'>
                        <Link to='/chips' className='VendingMachine-Link'>CHIPS</Link>
                        <Link to='/sardines' className='VendingMachine-Link'>SARDINES</Link>
                        <Link to='/soda' className='VendingMachine-Link'>SODA</Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default VendingMachine;
