import React, { Component } from "react";
import "./../../css/App.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loadCity from "../../redux/actions/cityAction";

class WeatherCard extends Component {
  componentDidMount() {
    const { city, failure, loading, weatherData, loadCityData } = this.props;
    if (!failure && !loading && !weatherData) {
      loadCityData(city);
    }
  }

  render() {
    const { failure, weatherData, cityName } = this.props;

    if (weatherData && weatherData.main) {
      return (
        <div class="row">
          <div class="col-xs-6">
            <div class="card">
              <div class="card-body" data-filter="overlay-secondary">
                <h5 class="card-title text-center">{cityName.toUpperCase()}</h5>
                <p class="card-text text-center">
                  {parseInt(weatherData.main.temp) - 273}&#176;C
                </p>
                {/* <a href="https://www.google.com" class="stretched-link"></a> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div class="row">
        <div class="col-xs-6">
          <div class="card">
            <div class="card-body" data-filter="overlay-secondary">
              <h5 class="card-title text-center">{cityName}</h5>
              <p class="card-text text-center">Please enter a valid city</p>
              {/* <a href="https://www.google.com" class="stretched-link"></a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
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

WeatherCard.defaultProps = {
  cityName: "",
  loading: false,
  failure: false,
  weatherData: null,
};

function mapStateToProps(state, ownProps) {
  return state.cities.find((cityObj) => cityObj.city === ownProps.cityName);
}

function mapDispatchToProps(dispatch) {
  return {
    loadCityData: (cityName) => dispatch(loadCity(cityName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard);
