import React, { Component } from 'react';
import './Droid.css';

class Droid extends Component {

  componentDidMount(){
    console.log('Droid component mounted...');
  }

  componentWillUnmount(){
    console.log('Droid component will unmount...');
  }

  render() {

    console.log('Droid component rendered!!!');

    let imgURL = 'https://images.unsplash.com/photo-1539606328118-80c679838702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1827&q=80';
    
    return (
      <div>
        <h1 className='pageTitle'>Droid {this.props.name}</h1>
        <div className='pageDetail'>your droid is stored here...</div>
        <div className='Droid-imgBox'>
          <img src={imgURL} className='Droid-img' alt='Droid Image by Alec Favale on Unsplash' title='Droid Image by Alec Favale on Unsplash' />
        </div>
      </div>
    )
  }
}

export default Droid;