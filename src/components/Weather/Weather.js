import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Input from "./Input";
import axios from "axios";
import './weather.css'
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [query, setQuery] = useState("Vancouver");
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;

  useEffect(() => {
    fetchHandler();
  }, []);

  const fetchHandler = () => {
    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setWeather(res.data);
        console.log(res.data);
      });
      setQuery("");
    }
  };

  return (
    <>
      <h2 className="text-l pt-3 font-semibold mr-8 mb-4 sm:text-center lg:text-right today-title font1">
        Today's Weather
      </h2>
      <Input setQuery={setQuery} query={query} search={search}  />
      <CurrentWeather weather={weather}  />
    
    </>
  );
};

export default Weather;
