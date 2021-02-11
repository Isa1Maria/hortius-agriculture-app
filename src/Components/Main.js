import React from 'react';
import '../App.css';
import './Main.css';
import {Button} from './Button';
import backgroundImage from '../Components/Images/backgroundImage.jpg';



function Main() {
    return (
        <div className="main-container" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
         
            <h1> Wouldn't it be great to have your own garden?</h1>
      <h2>
          With Hortíos you can learn how to!
      </h2>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Start Cultivating!
        </Button>      
        </div>
    
        </div>
    )
}

export default Main;
