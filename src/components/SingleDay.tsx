import React from "react";
import moment from "moment";
import { IWeatherResponseDTO } from "../types";

const SingleDay = ({ data }: { data: IWeatherResponseDTO }) => {
  return (
    <div className="weather-day">
      <h3 data-testid="weather-day">{moment(data.dt_txt).format("dddd")}</h3>
      <div className="day-info">
        <span data-testid="weather-temp">{data.main.temp} C</span>
        <span data-testid="weather-status">{data.weather[0].main}</span>
      </div>
    </div>
  );
};

export default SingleDay;
