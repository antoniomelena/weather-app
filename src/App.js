import "./App.css";
import { useState, useEffect } from "react";

// import * as Icon from "react-bootstrap-icons";
import Card from "./Card";

function App() {
  const [city, setCity] = useState("Austin");
  const [name, setName] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [fahrenheit, setFahrenheit] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
    console.log(city);
  };

  async function getWeather(event) {
    event.preventDefault();

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${
          fahrenheit ? "imperial" : "metric"
        }&APPID=e395dd8336d145da909e963c0606d556`,
        { mode: "cors" }
      );
      const city_data = await res.json();
      console.log(city_data);
      const city_name = city_data.name;
      const city_humidity = city_data.main.humidity;
      const feels_like = city_data.main.feels_like;
      const current_temp = city_data.main.temp;
      const max_temp = city_data.main.temp_max;
      const min_temp = city_data.main.temp_min;
      const city_description = city_data.weather[0].description;
      const wind_deg = city_data.wind.deg;
      const wind_speed = city_data.wind.speed;
      setName(city_name);
      setDescription(city_description);
      setFeelsLike(feels_like);
      setHumidity(city_humidity);
      setCurrentTemp(current_temp);
      setMinTemp(min_temp);
      setMaxTemp(max_temp);
      setWindDeg(wind_deg);
      setWindSpeed(wind_speed);
    } catch (error) {
      console.log("Error happened: ", error);
    }
  }
  async function getAustin() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${
          fahrenheit ? "imperial" : "metric"
        }&APPID=e395dd8336d145da909e963c0606d556`,
        { mode: "cors" }
      );
      const city_data = await res.json();
      const city_name = city_data.name;
      const city_humidity = city_data.main.humidity;
      const feels_like = city_data.main.feels_like;
      const current_temp = city_data.main.temp;
      const max_temp = city_data.main.temp_max;
      const min_temp = city_data.main.temp_min;
      const city_description = city_data.weather[0].description;
      const wind_deg = city_data.wind.deg;
      const wind_speed = city_data.wind.speed;
      setName(city_name);
      setDescription(city_description);
      setFeelsLike(feels_like);
      setHumidity(city_humidity);
      setCurrentTemp(current_temp);
      setMinTemp(min_temp);
      setMaxTemp(max_temp);
      setWindDeg(wind_deg);
      setWindSpeed(wind_speed);
    } catch (error) {
      console.log("Error happened: ", error);
    }
  }

  useEffect(() => {
    getAustin();
    return () => {};
  }, []);

  return (
    <div className="App">
      <form className="input-group input-group-sm my-2" onSubmit={getWeather}>
        <input
          id="search-bar"
          type="search"
          onChange={handleChange}
          className="form-control text-light bg-dark"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="submit" className="btn btn-secondary">
          enter
        </button>
      </form>
      <Card
        name={name}
        description={description}
        currentTemp={currentTemp}
        minTemp={minTemp}
        maxTemp={maxTemp}
        feelsLike={feelsLike}
        humidity={humidity}
        windDeg={windDeg}
        windSpeed={windSpeed}
      />
    </div>
  );
}

export default App;
