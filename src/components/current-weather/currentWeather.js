import "../current-weather/currentWeather-style.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top-section">
        <div>
          <p className="city">Germany</p>
          <p className="weather-desc">Rainy</p>
        </div>
        <img alt="weather" className="weather-icon" src="weather-icons/01d.png"/>
      </div>
    </div>
  );
};

export default CurrentWeather;
