import React from "react";
import WeatherChart from "./WeatherChart";
import { Route, Link, Routes } from "react-router-dom";
import DetailView from "./DetailView";

const Dashboard = ({weatherForecast, currentWeather}) => {
    return (
        <>
            <div className="right-panel-dashboard">
            {currentWeather != null ? (
                        <>
                            <div className="sub-container sub1"><h4>City Name: {currentWeather.city_name}</h4></div>
                            <div className="sub-container sub2"><h4>Temperature: {currentWeather.temp}°C</h4></div>
                            <div className="sub-container sub3"><h4>Conditions: {currentWeather.weather.description}</h4></div>
                        </>
                    ) : (
                    <p>Loading current weather data...</p>
            )}
            <div className="sub-container sub4 chart-container">
                <WeatherChart weatherForecast={weatherForecast} />
            </div>
            <div className="sub-container sub4">
                {weatherForecast != null ? (
                    weatherForecast.map((day, index) => (
                        <div key={index} className="forecast-item">
                            <p><strong>Date: {day.valid_date}</strong></p>
                            <p>Max Temperature: {day.max_temp}°C</p>
                            <p>Min Temperature: {day.min_temp}°C</p>
                            <p>Conditions: {day.weather.description}</p>
                            <Link to={`/dashboard/${day.valid_date}/${day.max_temp}/${day.min_temp}/${encodeURIComponent(day.weather.description)}/${encodeURIComponent(day.description)}`}>More Details</Link>
                        </div>
                    ))
                    ) : (
                    <p>Loading weather forecast data...</p>
                )}
            </div>
            </div>
        </>
      
    )
}

export default Dashboard;

