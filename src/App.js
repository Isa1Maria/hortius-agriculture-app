import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact />
         </Switch>
         </Router> 
        

       <p>
          Wouldn't it be great to have your own garden?
          <br/>
          But you don't know how to start?
          <br/>
          With Hortíos you can learn how to!
        </p>
        <button type="button" class="btn btn-success">
          Start cultivating!
        </button>
       
      </header>
    </div>
  );
}

export default App;
