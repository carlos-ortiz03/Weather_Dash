import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Search from "./Search";
import About from "./About";
import DetailView from "./DetailView";

const MainPage = ({handleSearch, weatherForecast, currentWeather}) => {

    return (
      <div className="right-panel">
        <Routes>
          <Route path="/dashboard" element={<Dashboard weatherForecast={weatherForecast} currentWeather={currentWeather} />} />
          <Route path="/dashboard/:date/:max_temp/:min_temp/:conditions/:description" element={<DetailView />} />
          <Route path="/search" index={true} element={<Search handleSearch={handleSearch}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    )
}

export default MainPage