import React from 'react';
import '../App.css';
import './Main.css';
import {Button} from './Button';

function Main() {
    return (
        <div className="main-container">
            <h1> Wouldn't it be great to have your own garden?</h1>
      <p>But you don't know how to start?
      <br/>
          With Hortíos you can learn how to!
      </p>
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
