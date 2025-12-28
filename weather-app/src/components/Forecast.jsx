function Forecast({ forecast }) {

  // Pick one forecast per day (12:00 PM)
  const dailyForecast = forecast.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">
      <h3 className="forcast-heading">📅 5-Day Forecast</h3>

      <div className="forecast-container">
        {dailyForecast.map((day, index) => {
          const date = new Date(day.dt_txt).toDateString();
          const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <div className="forecast-card" key={index}>
              <p>{date}</p>
              <img src={icon} alt="weather icon" />
              <p>{day.weather[0].description}</p>
              <p>🌡️ {day.main.temp} °C</p>
              <p>💧 {day.main.humidity}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
