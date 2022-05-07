import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="">
      <div className="lg:flex justify-end align-center">
        <section className="mt-12  flex lg:block justify-evenly font1">
          <div className="mb-12 text-3xl lg:flex justify-center">
            <p className="mr-3">{weather.name}</p>
          </div>
          <div className="mb-12 text-3xl lg:flex justify-center">
            {weather.main ? <p>{weather.main.temp.toFixed()}°C</p> : null}
          </div>
          <div className="mr-8">
            <div className="text-3xl lg:flex justify-center">
              {weather.weather ? (
                <div>
                  <p>{weather.weather[0].main}</p>
                  <img
                    src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                    alt="icon"
                    width="100%"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <section className="lg:mt-12 flex lg:block justify-evenly font1">
          <div className="mb-12">
            <p className="weather-title">City</p>
          </div>
          <div className="mb-12">
            <p className="weather-title">Temp</p>
          </div>
          <div className="mr-8">
            <div>
              <p className="weather-title">Weather</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentWeather;
