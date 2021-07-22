import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/weather.scss';
import Search from './Search';

const { search }  = window.location;
let city = new URLSearchParams(search).get('city')

const Weather = () => {
  const [weather, updateWeather] = useState([]);

  useEffect(() => {
    axios.get(getApiCall(city)).then(res => {
      for(let i = 0; i < 5; i++){
        updateWeather(prevArray => [...prevArray, (res.data.list[i].weather[0].description)])
      }
    })
  }, [])

  var getApiCall = cityName => `http://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&cnt=5&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`;
  var count = 1
  const weatherForecast = weather.map((day) => <li key = {count++}>{day}</li>);

  return (
    <div data-testid="weather" className="weather">
    <Search />
      Weather:
      The 5 day forcast of {city} is: <ul> {weatherForecast} </ul>
    </div>
  );
}

export default Weather;
