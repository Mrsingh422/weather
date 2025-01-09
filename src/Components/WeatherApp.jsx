import React, { useState } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import drizzle_icon from '../Assets/drizzle.png';
import cloud_icon from '../Assets/cloud.png';

const WeatherApp = () => {
  const api_key = "46cd5d9913294724fac3ece318f4ee51";

  // State for managing the weather icon
  const [wicon, setwicon] = useState(cloud_icon);

  const search = async () => {
    let element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const country = document.getElementsByClassName("country");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
    country[0].innerHTML = data.sys.country;

    // Update the weather icon based on API response
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setwicon(clear_icon);
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setwicon(cloud_icon);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setwicon(drizzle_icon);
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setwicon(rain_icon);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setwicon(rain_icon);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setwicon(snow_icon);
    } else {
      setwicon(clear_icon);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='search' onKeyPress={handleKeyPress} />
        <div className="search-icon" onClick={() => { search(); }}>
          <img src={search_icon} className='img-search' alt="search" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} className='img-cloud' alt="cloud" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="country">UK</div>

      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="icon" className='img-humidity' />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="icon" className='img-wind' />
          <div className="data">
            <div className="wind-rate">18km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
