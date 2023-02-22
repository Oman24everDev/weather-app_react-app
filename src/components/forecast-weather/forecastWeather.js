import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
// import the accordion from npm i react-accessible-accordion
import "../forecast-weather/forecast-style.css";

// the data parameter is to pass the data from fetch states map to display
const ForecastWeather = ({ data }) => {
  return (
    <>
      <label className="title">Daily</label>

      {/* the property allowZeroExpanded is to allow all the accordion to be close otherwise one of the accordion needs to be open up*/}
      <Accordion allowZeroExpanded>
        {/* this line if for map on object 'list' and get only 7 results using splice */}
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Hello
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
