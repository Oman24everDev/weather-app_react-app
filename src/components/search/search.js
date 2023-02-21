import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// this AsyncPaginate is install using npm i react-select-async-paginate --force

            // this onSearchChange is function to pass the event into App.js file
const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);
    
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
        />
    )
}

export default Search;