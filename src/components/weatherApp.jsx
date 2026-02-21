import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="weather">
      <div className="weather__card">

        <div className="weather__search">
          <input type="text" placeholder="Search city..." />
          <button>Search</button>
        </div>

        <div className="weather__info">
          <h2 className="weather__city">Addis Ababa</h2>
          <p className="weather__date">Monday, 21 February</p>

          <div className="weather__main">
            <div className="weather__icon">☀️</div>
            <div className="weather__temp">24°C</div>
          </div>

          <p className="weather__desc">Sunny</p>
        </div>

        <div className="weather__details">
          <div className="weather__detail">
            <span>Humidity</span>
            <strong>65%</strong>
          </div>
          <div className="weather__detail">
            <span>Wind</span>
            <strong>12 km/h</strong>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherApp;