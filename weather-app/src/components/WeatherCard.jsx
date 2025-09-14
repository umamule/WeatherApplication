export function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p className="weather-detail">🌡️ Temp: {weather.main.temp} °C</p>
      <p className="weather-detail">🌥️ Weather: {weather.weather[0].description}</p>
      <p className="weather-detail">🌥️ Weather: {weather.weather[0].main}</p>
      <p className="weather-detail">💨 Wind: {weather.wind.speed} m/s</p>
      
      <p>Make with 💖 from <b>Uma Mule</b></p>
    </div>
  );
}

export default WeatherCard;
