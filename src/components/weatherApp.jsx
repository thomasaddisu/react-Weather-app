import "./WeatherApp.css";
import { useState } from "react";

function WeatherApp({ weatherData, onSearch }) {
  const [city, setCity] = useState("addis ababa");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
    setCity("");
  };

  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  console.log(formattedDate);

  if (!weatherData) {
    return (
      <div className="weather">
        <div className="weather__card ">
          <div className="weather__search">
            <input type="text" placeholder="Search city..." />
            <button>Search</button>
          </div>
          <div className="weather__card-loading">
            ...Loading
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="weather">
      <div className="weather__card">
        <div className="weather__search">
          <input type="text" placeholder="Search city..." 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="weather__info">
          <h2 className="weather__city">{weatherData.name}</h2>
          <p className="weather__date">{formattedDate}</p>

          <div className="weather__main">
            <div className="weather__icon">☀️</div>
            <div className="weather__temp">{weatherData.main.temp}°C</div>
          </div>

          <p className="weather__desc">{weatherData.weather[0].description}</p>
        </div>

        <div className="weather__details">
          <div className="weather__detail">
            <span>Humidity </span>
            <strong>{weatherData.main.humidity}%</strong>
          </div>
          <div className="weather__detail">
            <span>Wind </span>
            <strong>{weatherData.wind.speed} km/h</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
