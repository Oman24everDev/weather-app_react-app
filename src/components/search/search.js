import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// this AsyncPaginate is install using npm i react-select-async-paginate --force
import { GEO_API_URL, geoApiOptions } from "../../api";


            // this onSearchChange is function to pass the event into App.js file
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

                // this inputValue is the value where we type in the input, & use that value to pass 
                // it to fetch method to URL and get the DATA
    const loadingOpt = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
        // this line is to filter out the small places & limit to 1M population to give much better search 
        // the namePrefix is to get what is in the params inputValue
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    
    // the searchData here is to retrieve the data that input in AsyncPaginate component
    const handleOnChange = (searchData) => {
        setSearch(searchData);      // this method is to update the search
        onSearchChange(searchData); // this is the event/function above to pass the input from handle
    }

    return (
        <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadingOpt}    // this property w/ method of loadingOpt is for every type on searchbar 
                                    // it will fetch & load the data from API through Async Request
        />
    )
}

export default Search;