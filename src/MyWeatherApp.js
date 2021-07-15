import React, { Component } from "react";
import {Route} from "react-router-dom";
import MainPage from "./Pages";
import NotFoundPage from "./Pages/404";

class MyWeatherApp extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/404" component={NotFoundPage}></Route>
      </React.Fragment>
    );
  }
}

export default MyWeatherApp;
