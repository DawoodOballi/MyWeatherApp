import React, { Component } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./Pages";
import NotFoundPage from "./Pages/404";
import Navigation from "./components/Common/Navigation";
import Header from "./components/Common/Header";

class MyWeatherApp extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Header />
            <Navigation />
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/404" component={NotFoundPage}></Route>
          </Router>
      </React.Fragment>
    );
  }
}

export default MyWeatherApp;
