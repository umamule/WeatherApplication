import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = "129e2bec3e2037cfbadcb16b11acf0f8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="app">
      <h1>🌦️ React Weather App</h1>
      <SearchBox onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
