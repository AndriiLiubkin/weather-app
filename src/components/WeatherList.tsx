import React from "react";
import SingleDay from "./SingleDay";

import { IWeatherResponseDTO } from "../types";

const WeatherList = ({
  weatherData,
  currentCity,
}: {
  weatherData: IWeatherResponseDTO[];
  currentCity: string;
}) => {
  return (
    <div className="weather-list">
      <div className="current-city">
        <h2>Current City</h2>
        <span>{currentCity}</span>
      </div>
      {weatherData.map((weather: IWeatherResponseDTO) => (
        <SingleDay key={weather.dt} data={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
