 import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    const apiKey = "YOUR_API_KEY"; // from openweathermap.org

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const json = await res.json();

    setData({
      name: json.name,
      temp: json.main.temp,
      humidity: json.main.humidity,
      condition: json.weather[0].main,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Weather App</h2>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Temp: {data.temp} °C</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Condition: {data.condition}</p>
        </div>
      )}
    </div>
  );
}
