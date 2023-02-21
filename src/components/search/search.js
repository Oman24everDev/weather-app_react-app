import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// this AsyncPaginate is install using npm i react-select-async-paginate --force

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);
    
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
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