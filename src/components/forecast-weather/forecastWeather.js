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
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forecastDays);

  return (
    <>
      <label className="title">Daily</label>

      {/* the property allowZeroExpanded is to allow all the accordion to be close otherwise one of the accordion needs to be open up*/}
      <Accordion allowZeroExpanded>

        {/* this line is a loop, if for map on object 'list' and get only 7 results using splice */}
        {/* the params item is for accessing the data from objects instead of data.sample.sample */}
        {/* the params index is for the key to Accordion to loop */}
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={`weather-icons/${item.weather[0].icon}.png`}/>
                  <label className="day"></label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
