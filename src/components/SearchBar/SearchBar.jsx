import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

    }

    const onChange = (event) => {
        setSearchTerm(event.target.value)
        console.log(searchTerm);
    }

    return (
    <form onSubmit={onSubmit}>
        <label htmlFor='search'>Search Tracks</label>
            <input type='text' placeholder='Enter a song title' onChange={onChange} />
        <button type='submit'>Search</button>
    </form>
    );
};

export default SearchBar;