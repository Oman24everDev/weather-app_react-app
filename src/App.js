import Search from "./components/search/search";
import "./style.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);

    // this line is the result from handleOnSearchChange,
    // to get the value in object from Geo API (lat & lon),
    // then pass it to variable to template literal in currentWeatherFetch
    const [lat, lon] = searchData.value.split(" ");

    // this line is to fetch the openweather API lat & lon for 1st current weather API call
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // this line is to fetch the 2nd api call from openweather API which is the forecast
    // same API_URL the difference is the /forecast
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // the passing of variable on array is ordered 1st is current 2nd is forecast
    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      // the json is to map on the response & pass to variable, the index 0 is for the 1st result
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      // this line is from the useState, pass the var into "setState"
      // & once the response is map to json we can update the state
      // then extend city: is from the search.js map response GEO API fetch return label: city.name & city.contrycode
      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));

    // !!! after fetch & create the Promise, next is the useState hooks
  }

  // this console.log is for test the fetch data if correct or not
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      {/* this handleOnSearchChange is to get the input from search bar then pass it to onSearchChange
            5. from the onSearchChange coming into search.js is passing the value to handleOnSearchChange then console.log to check result */}
      <Search onSearchChange={handleOnSearchChange} />
      
      {/* the adding of curly brace in component is if the,
        the data is for passing the data from currentWeather fetch state to display  */}
      { currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
