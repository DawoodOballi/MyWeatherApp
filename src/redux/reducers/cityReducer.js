import {
  ADD_CITY,
  LOAD_CITY_FAILURE,
  LOAD_CITY_SUCCESS,
  LOAD_CITY_IN_PROGRESS,
} from "../actions/actions";

export default function cityReducer(state = [ {city: 'London'} ], action) {
  switch (action.type) {
    case ADD_CITY:
      const newCity = {
        city: action.city
      }
      return [...state, newCity];

    case LOAD_CITY_SUCCESS:
      return state.map((cityObj) => {
        if (cityObj.city === action.city) {
          return {
            ...cityObj,
            failure: false,
            weatherData: action.weatherData,
            loading: false,
          };
        }
        return cityObj;
      });

    case LOAD_CITY_FAILURE:
      return state.map((cityObj) => {
        if (cityObj.city === action.city) {
          return {
            ...cityObj,
            failure: true,
            weatherData: action.error,
            loading: false,
          };
        }
        return cityObj;
      });

    case LOAD_CITY_IN_PROGRESS:
      return state.map((cityObj) => {
        if (cityObj.city === action.city) {
          return {
            ...cityObj,
            loading: true,
          };
        }
        return cityObj;
      });

    default:
      return state;
  }
}
