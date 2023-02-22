import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// this AsyncPaginate is install using npm i react-select-async-paginate --force
import { GEO_API_URL, geoApiOptions } from "../../api";
import "../search/search-style.css"

        // this onSearchChange is function to pass the event into App.js file
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // this inputValue is the value where we type in the input, & use that value to pass
  // it to fetch method to URL and get the DATA
  const loadingOpt = (inputValue) => {
    // this line is to filter out the small places & limit to 1M population to give much better search
    // using minPopulation params & the namePrefix params is to get what is in the inputValue
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {             // this line is to return array of objects & map on it using template literal
                             // it is also for correcting the value of search
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  // the searchData here is to retrieve the data that input in AsyncPaginate component
  const handleOnChange = (searchData) => {  // 2. pass the data on searchData
    setSearch(searchData);                  // 3. set a new value
    onSearchChange(searchData);           // this is the event/function above to pass the input from handle
  };                                        // 4. then call onSearchChange & pass to App.js

  return (
    <AsyncPaginate
      className="search-bar"
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}  // 1. call the handleOnChange
      loadOptions={loadingOpt} // this property w/ method of loadingOpt is for every type on searchbar
                              // it will fetch & load the data from API through Async Request
    />
  );
};

export default Search;
