import React, { useEffect, useState } from "react";
import axios from "axios";

import CityInput from "./components/CityInput";
import WeatherList from "./components/WeatherList";
import WeatherSummary from "./components/WeatherSummary";

import { IWeatherResponseDTO } from "./types";

const API_KEY = "2ae8c416f783c32d91162bc0473d67c6";

function App() {
   
  const [weather, setWeather] = useState<IWeatherResponseDTO[]>([]);
  const [city, setCity] = useState<string>("London");
  const [currentCity, setCurrentCity] = useState<string>("London");


  const getWeather = async () => {
    const request = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
    const result = request.data.list.filter((e: IWeatherResponseDTO, i: number) => i % 8 === 0);
    setWeather(result);
    setCurrentCity(request.data.city.name);
  }

  useEffect(() => {
    getWeather();
  }, []);
  
  return (
    <div className="App">
      <h1 data-testid="weather-header">Weather App</h1>
      <CityInput onCityChange={setCity} onGetWeather={getWeather} />
      <WeatherList weatherData={weather} currentCity={currentCity} />
      <WeatherSummary weatherData={weather}/>
    </div>
  );
}

export default App;
