import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import MainPage from './Pages/index';
import NotFoundPage from './Pages/404'

class MyWeatherApp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/404" component={NotFoundPage}></Route>
          <Redirect to="/404/"/>
        </Switch>
      </Router>
    );
  }
}

export default MyWeatherApp;
