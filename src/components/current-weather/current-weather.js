import React from "react";
import WeatherIcon from "../../assets/wind.png";
import PressureIcon from "../../assets/pressure.png";
import HumidIcon from "../../assets/humid.png";
import "./current-weather.css";
import { NUMBER0 } from "../../utils/constants";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="section-top">Current Weather</div>
      <div className="current-weather-wrapper">
        <div className="city-temperature">
          <p className="city">{data.city}</p>
          <div className="temperature-details">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[NUMBER0].icon}.png`}
            />
            <p className="temperature">{Math.round(data.main.temp)}°</p>
          </div>
          <p className="weather-description">
            {data.weather[NUMBER0].description}
          </p>
        </div>
        <div className="parameter-details">
          <div className="temperature-feel">
            <span className="">Feels like </span>
            <span className="">{Math.round(data.main.feels_like)}°</span>
          </div>
          <div className="parameter-row">
            <img src={WeatherIcon} alt="Wind Icon" />
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <img src={HumidIcon} alt="Humid Icon" />
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <img src={PressureIcon} alt="Pressure Icon" />
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
