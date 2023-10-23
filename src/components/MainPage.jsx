import React from "react";
import { useState } from "react";

const MainPage = ({windowIndex, handleSearch, weatherForecast, currentWeather}) => {
    const [locationInput, setLocationInput] = useState("")

    let main_body;

    const handleInputChange = (event) => {
      setLocationInput(event.target.value); // Update the location input state
    };

    if (windowIndex === 0) {
        main_body = (
          <div className="right-panel">
            {currentWeather ? (
                        <>
                            <div className="sub-container sub1"><h4>City Name: {currentWeather.city_name}</h4></div>
                            <div className="sub-container sub2"><h4>Temperature: {currentWeather.temp}°C</h4></div>
                            <div className="sub-container sub3"><h4>Conditions: {currentWeather.weather.description}</h4></div>
                        </>
                    ) : (
                    <p>Loading current weather data...</p>
            )}
            <div className="sub-container sub4">
                {weatherForecast ? (
                    weatherForecast.map((day, index) => (
                        <div key={index} className="forecast-item">
                            <p><strong>Date: {day.valid_date}</strong></p>
                            <p>Max Temperature: {day.max_temp}°C</p>
                            <p>Min Temperature: {day.min_temp}°C</p>
                            <p>Conditions: {day.weather.description}</p>
                        </div>
                    ))
                    ) : (
                    <p>Loading weather forecast data...</p>
                )}
            </div>
          </div>
        )
    } else if (windowIndex === 1) {
        main_body = (
        <div className="main-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter a location..."
              value={locationInput}
              onChange={handleInputChange}
              className="search-input"
            />
            <button onClick={() => handleSearch(locationInput)} className="search-button">Search</button>
          </div>
        </div>
        )
      } else {
        main_body = <h1 className="credits">Created By Carlos Ortiz</h1>;
      }

    return main_body;
}

export default MainPage