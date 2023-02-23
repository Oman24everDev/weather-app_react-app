import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
// import the accordion from npm i react-accessible-accordion
import "../forecast-weather/forecast-style.css";

// this array is for the label className of 'day'
const WEEK_DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

// the data parameter is to pass the data from fetch states map to display
const ForecastWeather = ({ data }) => {

    const dayInAWeek = new Date().getDay();     // gets the day local time

    // this line is for the array of days with current day & concat with the remaining days a week
    // dayInAWeek is to determine what your current day is before slice & concat
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    // console.log(forecastDays);   // to check if the get days is correct

  return (
    <>
      <label className="title">Daily Forecast</label>

      {/* the property allowZeroExpanded is to allow all the accordion to be close otherwise one of the accordion needs to be open up*/}
      <Accordion allowZeroExpanded>

        {/* this line is a loop, if map on object 'list' and get only 7 results using splice */}
        {/* the params item is for accessing the data from objects instead of data.sample.sample */}
        {/* the params index is for the key to Accordion to loop */}
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index} className="forecast-bar">
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={`weather-icons/${item.weather[0].icon}.png`}/>
                  <label className="day">{forecastDays[index]}</label>
                  <label className="forecast-desc">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
