import { Link } from "react-router-dom";
import { useState } from "react";

const Search = ({handleSearch}) => {
    const [locationInput, setLocationInput] = useState("")

    const handleInputChange = (event) => {
      setLocationInput(event.target.value); // Update the location input state
    };

    return (
      <div className="right-panel-search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter a location..."
            value={locationInput}
            onChange={handleInputChange}
            className="search-input"
          />
          <Link to="/dashboard" onClick={() => handleSearch(locationInput)} className="search-button">Search</Link>
        </div>
      </div>
    )
}

export default Search;
