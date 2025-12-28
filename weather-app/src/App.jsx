import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "129e2bec3e2037cfbadcb16b11acf0f8";

  // 🔍 Fetch by city name
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const weatherData = await weatherRes.json();

      if (weatherData.cod !== 200) {
        throw new Error(weatherData.message);
      }

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();

      setWeather(weatherData);
      setForecast(forecastData.list);
      localStorage.setItem("lastCity", city);

    } catch (err) {
      setError("City not found ❌");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  // 📍 Fetch by user location
  const fetchByLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported ❌");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const weatherData = await weatherRes.json();

          const forecastRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const forecastData = await forecastRes.json();

          setWeather(weatherData);
          setForecast(forecastData.list);
          localStorage.setItem("lastCity", weatherData.name);

        } catch (err) {
          setError("Unable to fetch weather for location ❌");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied ❌");
        setLoading(false);
      }
    );
  };

  // 🔁 Load last searched city
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) fetchWeather(lastCity);
  }, []);

  return (
    <div className="app">
      <h1 className="Main-heading">🌦️ React Weather App</h1>

      {/* Search + Location buttons together */}
      <SearchBox 
        onSearch={fetchWeather} 
        onLocation={fetchByLocation} 
        className="search"
      />

      {loading && <p>Loading weather... ⏳</p>}
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
