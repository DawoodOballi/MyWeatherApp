import { getWeatherForCity } from "../../API/OpenWeatherMapAPI";

import { 
    ADD_CITY, 
    LOAD_CITY_FAILURE, 
    LOAD_CITY_SUCCESS, 
    LOAD_CITY_IN_PROGRESS 
} from "./actions";



export function addCity(city) {
    return {type: ADD_CITY, city}
}

export function loadCityFailure(city, error) {
    return {type: LOAD_CITY_FAILURE, city, error}
}

export function loadCityInProgress(city) {
    return {type: LOAD_CITY_IN_PROGRESS, city}
}


export function loadCitySuccess(city, weatherData) {
  return { type: LOAD_CITY_SUCCESS, city, weatherData };
}


export default function loadCity(city) {
    return dispatch => {
        dispatch(loadCityInProgress(city));

        return getWeatherForCity(city)
            .then(weatherData => {
                dispatch(loadCitySuccess(city, weatherData));
            })
            .catch(error => {
                console.log({error});
                dispatch(loadCityFailure(city, error.message));
            });    
    };
};