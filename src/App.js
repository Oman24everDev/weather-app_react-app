import Search from "./components/search/search";
import "./style.css";
import CurrentWeather from "./components/current-weather/currentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);

    // this line is the result from handleOnSearchChange,
    // to get the value in object from Geo API (lat & lon),
    // then pass it to variable to template literal in currentWeatherFetch 
    const [lat, lon] = searchData.value.split(" ");

    // this line is to fetch the openweather API lat & lon for 1st current weather API call
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
  };

  return (
    <div className="container">
      {/* this handleOnSearchChange is to get the input from search bar then pass it to onSearchChange
            5. from the onSearchChange coming into search.js is passing the value to handleOnSearchChange then console.log to check result */}
      <Search onSearchChange={handleOnSearchChange} />

      <CurrentWeather />
    </div>
  );
}

export default App;
