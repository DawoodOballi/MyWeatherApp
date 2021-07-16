import React, { Component } from "react";
import Navigation from "../NavigationComponent/Navigation";
import "../../css/DetailView.scss";
import "../../scss/reset.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loadCity from "../../redux/actions/cityAction";
import { getWeatherForCity } from "../../API/OpenWeatherMapAPI";
import { render } from "@testing-library/react";


class DetailView extends Component {

    componentDidMount() {
    console.log(this.props);
    const { city, failure, loading, weatherData, loadCityData } = this.props;
    if (!failure && !loading && !weatherData) {
      loadCityData(city);
    }
  }

  
  render(){
    const { weatherData, city } = this.props;
  return (
    <React.Fragment>
      <Navigation />
      <div class="container emp-profile">
        <form method="post">
          <div class="row">
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg"
                  alt=""
                />
                <div class="file btn btn-lg btn-primary">
                  {city.toUpperCase()}
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="profile-head">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Weather Details
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Five Day Forecast
                    </a>
                  </li>
                </ul>
              </div>
              <div class="profile-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Temeperature</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {parseInt(weatherData.main.temp) - 273}&#176;C
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>High</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {parseInt(weatherData.main.temp_max) - 273}&#176;C
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Low</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {parseInt(weatherData.main.temp_min) - 273}&#176;C
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>humidity</label>
                          </div>
                          <div class="col-md-6">
                            <p>{parseInt(weatherData.main.humidity)}%</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Weather</label>
                          </div>
                          <div class="col-md-6">
                            <p>{weatherData.weather[0].main.toUpperCase()}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Description</label>
                          </div>
                          <div class="col-md-6">
                            <p>{weatherData.weather[0].description.toUpperCase()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
}

DetailView.propTypes = {
  cityName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  failure: PropTypes.bool.isRequired,

  weatherData: PropTypes.shape({
    weather: PropTypes.shape({
      main: PropTypes.string,
      description: PropTypes.string,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      humidity: PropTypes.number,
    }),
  }),
};

DetailView.defaultProps = {
  cityName: "",
  loading: false,
  failure: false,
  weatherData: null,
};

function mapStateToProps(state, ownProps) {
  return state.cities.find((cityObj) => cityObj.city === ownProps.match.params.city);
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadCityData: () => dispatch(loadCity(ownProps.match.params.city)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
