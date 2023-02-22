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
      <div className="bottom-section">
        <p className="temperature">22°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="label detail">Label Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">18°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind</span>
            <span className="value">3 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">14 %</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure</span>
            <span className="value">16 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
