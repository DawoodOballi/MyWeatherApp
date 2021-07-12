import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import MainPage from './Pages/index';
import NotFoundPage from './Pages/404';


class MyWeatherApp extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Router>
              <Switch>
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/404" component={NotFoundPage}></Route>
                <Redirect to="/404/"/>
              </Switch>
            </Router>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </React.Fragment>
    );
  }
}

export default MyWeatherApp;
