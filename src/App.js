import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import SignUp from './Components/Pages/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="back">
       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home}/>
           <Route path='/about' exact component={About}/>
           <Route path='/contact' exact component={Contact}/>
           <Route path='/signup' exact component={SignUp}/>
         </Switch>
         </Router> 
    </div>
  );
}

export default App;
