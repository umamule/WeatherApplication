function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img src={iconUrl} alt="weather icon" />

      <p>🌡️ Temp: {weather.main.temp} °C</p>
      <p>🤒 Feels Like: {weather.main.feels_like} °C</p>
      <p>💧 Humidity: {weather.main.humidity} %</p>
      <p>🌥️ Condition: {weather.weather[0].description}</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>🔽 Pressure: {weather.main.pressure} hPa</p>
      <p>🌅 Sunrise: {sunrise}</p>
      <p>🌇 Sunset: {sunset}</p>

      <p className="footer">
        Made with 💖 by <b>Uma Mule</b>
      </p>
    </div>
  );
}

export default WeatherCard;
