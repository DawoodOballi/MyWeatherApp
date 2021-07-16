import React, { Component } from "react";
import {Route} from "react-router-dom";
import MainPage from "./Pages";
import NotFoundPage from "./Pages/404";
import DetailView from "./components/DetailViewComponent/DetailView";

const MyWeatherApp = () => {
    return (
      <React.Fragment>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/404" component={NotFoundPage}></Route>
        <Route path="/DetailView/:city" component={DetailView}></Route>
      </React.Fragment>
    );
  };

export default MyWeatherApp;
