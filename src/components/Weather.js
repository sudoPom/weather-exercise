import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styling/weather.scss';

const Weather = () => {
  const [weather, updateWeather] = useState(null)

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      updateWeather(res.data.weather[0].description)
    })
  }, [])

  return (
    <div data-testid="weather" className="weather">
      Weather:
      <br />
      The current weather in London is: {weather}
    </div>
  );
}

export default Weather;
