import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './Home.jsx';
import History from './History.jsx';

class App extends Component {
  render() {
      return (
        <div>
            <NavLink to="/ " activeClassName="selected"> Accueil </NavLink>
            <NavLink to="/notre-histoire" activeClassName="selected"> Contact </NavLink>
          
            <Switch> 
              <Route exact path="/ " component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
        </div>
      );
  }
}


export default App;
