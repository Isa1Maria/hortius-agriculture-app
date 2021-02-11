import React ,{useState, useEffect} from 'react';
import '../App.css';
import './Main.css';
import {Button} from './Button';
import backgroundImage from '../Components/Images/backgroundImage.jpg';
import backgroundImage2 from '../Components/Images/backgroundImage2.jpg';



const Main = () => {
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? backgroundImage : backgroundImage2;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <div className="main-container" 
        style={{ backgroundImage: `url(${imageUrl})` }}
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
