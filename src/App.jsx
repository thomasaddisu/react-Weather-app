import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherApp from "./components/weatherApp";

function App() {
  // weather app state and logic can be added here in the future
  const [weatherData, setWeatherData] = useState(null);
  // lets controle city is not correct
  

  const fetchWeatherData = async (location="Addis Ababa") => {

    const apiKey = "9537e31c70f9105cbabb8c63d1fc3c27";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setWeatherData(data);
      // console.log(weatherData)
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <>
      <WeatherApp weatherData={weatherData} onSearch={fetchWeatherData} />
    </>
  );
}

export default App;
