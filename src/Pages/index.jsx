import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./../components/NavigationComponent/Navigation";
import Form from "./../components/FormComponent/Form";
import WeatherCard from "../components/WeatherCardComponent/WeatherCard";
import "./../css/App.scss";
import { connect } from "react-redux";

const MainPage = ({ cities }) => {
  // if (!cities) {
  //   return (
  //     <React.Fragment>
  //       <Navigation />
  //       <Form />
  //     </React.Fragment>
  //   );
  // }
  return (
    <React.Fragment>
      <Navigation />
      <Form />
      <div>
        {cities.map(({ city }) => (
          <React.Fragment key={city}>
            <Link to={`/detailView/${city}`}>
            <div class="card-columns">
              <WeatherCard cityName={city} />
            </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    cities: state.cities,
  };
}

export default connect(mapStateToProps, null)(MainPage);
