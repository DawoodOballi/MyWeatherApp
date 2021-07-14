import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./Pages";
import NotFoundPage from "./Pages/404";
import Navigation from "./components/Common/NavigationComponent/Navigation";
import Form from "./components/Common/FormComponent/Form";

class MyWeatherApp extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Navigation />
            <Form/>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/404" component={NotFoundPage}></Route>
          </Router>
      </React.Fragment>
    );
  }
}

export default MyWeatherApp;
