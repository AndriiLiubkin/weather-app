import React from 'react';
import moment from 'moment';
import { IWeatherResponseDTO } from "../types";

const WeatherSummary = ({ weatherData}: { weatherData: IWeatherResponseDTO[] }) => {
  
  const findBestUmbrella = (weatherData: IWeatherResponseDTO[]) => {
    const result = weatherData.map((d: IWeatherResponseDTO) => d.weather[0].main === "Rain").lastIndexOf(true);
    if(result === -1) {
      return weatherData[0].dt_txt;
    }
    return weatherData[result].dt_txt;
  }

  const findBestJaket = (weatherData: IWeatherResponseDTO[]) => {
    const result = weatherData.reduce((prev: IWeatherResponseDTO, curr: IWeatherResponseDTO) => {
      return prev.main.temp < curr.main.temp ? prev : curr;
    });

    return result.dt_txt;
  }
  
  return (
    <div className="weather-summary">
      <h2>Weather Summary:</h2>
      {
        weatherData.length > 0 && 
          <ul className="summary-info">
            <li>
              <h3>Best day to sell an umbrella:</h3>
              <p>After {moment(findBestUmbrella(weatherData)).format('dddd')}</p>
            </li>
            <li>
              <h3>Best day to sell jacket:</h3>
              <p>After {moment(findBestJaket(weatherData)).format('dddd')}</p>
            </li>
          </ul>
      }
    </div>
  )
}

export default WeatherSummary;
