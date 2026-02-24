import "./WeatherApp.css";
import "./query.css";
import { useState } from "react";

function WeatherApp({ weatherData, onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  if (!weatherData) {
    return (
      <div className="weather">
        <div className="weather__card">
          <div className="weather__search">
            <input type="text" placeholder="Search city..." />
            <button>Search</button>
          </div>
          <div className="weather__card-loading">...Loading</div>
        </div>
      </div>
    );
  }

  return (
    
    <div className="weather">
      <div className="weather__card">
        <div className="weather__search">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <h2 className="weather__city">{weatherData.city}</h2>

        <div className="weather__days">
          
        {weatherData.forecast.map((day, index) => {
          const date = new Date(day.dt_txt);
          <div className="weather__divider">__________________________________</div>
          return (
            
            <div key={index} className="weather__day">
              <p className="weather__date">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>

              <div className="weather__main">
                <div className="weather__icon">☀️</div>
                <div className="weather__temp">
                  {Math.round(day.main.temp)}°C
                </div>
              </div>

              <p className="weather__desc">
                {day.weather[0].description}
              </p>

              <div className="weather__details">
                <div className="weather__detail">
                  <span>Humidity</span>
                  <strong>{day.main.humidity}%</strong>
                </div>
                <div className="weather__detail">
                  <span>Wind</span>
                  <strong>{day.wind.speed}km/h</strong>
                </div>
              </div>
            </div>
            
          );
        })}
        </div>
      </div>
    </div>);
}

export default WeatherApp;