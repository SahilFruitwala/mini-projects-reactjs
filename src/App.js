import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './Components/Navigation';
import Home from './Components/Home'
import Calculator from './Components/Calculator';
import TicTacToe from './Components/TicTacToe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/tictactoe" component={TicTacToe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
