const API_KEY = process.env.REACT_APP_OWM_API_KEY;
const baseUrl = "http://api.openweathermap.org";

export const getWeatherForCity = (city) =>
  fetch(`${baseUrl}/data/2.5/weather?q=${city}&appid=${API_KEY}`).then(
    (response) => {
      if (!response.ok) {
          throw Error(response.statusText)
      }
      return response;
    })
    .then(response => {
      return response.json();
    });
