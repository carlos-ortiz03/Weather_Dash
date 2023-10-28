import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const fetchCurrentWeather = (location) => {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${location}&key=${"cc816e38db274625bc5365975cad97fb"}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentWeather(data.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching current weather:', error);
      });
  };

  const fetchWeatherForecast = (location) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${"cc816e38db274625bc5365975cad97fb"}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherForecast(data.data);
      })
      .catch((error) => {
        console.error('Error fetching weather forecast:', error);
      });
  };

  const handleSearch = (location) => {
    console.log("hi")
    fetchCurrentWeather(location);
    fetchWeatherForecast(location);
  };





  return (
    <BrowserRouter>
      <div className="container">
        <div className="left-panel">
          <h1 className='title'>Weather Dash</h1>
          <NavBar />
        </div>
        <MainPage handleSearch={handleSearch} weatherForecast={weatherForecast} currentWeather={currentWeather}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App
