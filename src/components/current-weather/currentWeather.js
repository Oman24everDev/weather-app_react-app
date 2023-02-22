import "../current-weather/currentWeather-style.css";


        // the data parameter is to pass the data from fetch states map to display
const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top-section">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`weather-icons/${data.weather[0].icon}.png`}/>
      </div>
      <div className="bottom-section">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="label detail">Weather Details</span>
          </div>
          <div className="parameter-row">
            <span className="label">Feels like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="label">Wind</span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="label">Humidity</span>
            <span className="value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="label">Pressure</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
