import "../current-weather/currentWeather-style.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top-section">
                <p className="city">Germany</p>
                <p className="weather-desc">Rainy</p>
            </div>
            <img alt="weather" className="weather-icon" src="" />
        </div>
    );
}

export default CurrentWeather;