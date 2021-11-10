import "./App.css";
import logo from "./img/logo.png";
import { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayRain,
  WiNightAltRain,
  WiDayThunderstorm,
  WiNightAltLightning,
  WiFog,
  WiNightFog,
  WiSnowflakeCold,
  WiNightAltRainWind,
  WiHumidity,
  WiNa,
  WiThermometerExterior,
  WiThermometer,
  WiStrongWind,
  WiFahrenheit,
  WiCelsius,
} from "react-icons/wi";

function App() {
  const [city, setCity] = useState("Austin");
  const [name, setName] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [description, setDescription] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [icon, setIcon] = useState("");
  const [fahrenheit, setFahrenheit] = useState(true);

  const capitalize = (txt) => {
    if (txt === "" || txt.length === 0) return "";
    const lower = txt.toLowerCase();
    const words = lower.split(" ");
    const new_words = words.map((word) => {
      const first = word.charAt(0);
      const upper = first.toUpperCase();
      let rest = word.slice(1);
      const new_word = upper + rest.toLowerCase();
      return new_word;
    });
    return new_words.join(" ");
  };

  const changeScale = () => {
    setFahrenheit(!fahrenheit);
  };

  const find = (icon) => {
    switch (icon) {
      case "01d":
        return <WiDaySunny className="weather-icon day" />;
      case "01n":
        return <WiNightClear className="weather-icon night" />;
      case "02d":
        return <WiDayCloudy className="weather-icon day" />;
      case "02n":
        return <WiNightAltCloudy className="weather-icon night" />;
      case "03d":
        return <WiCloud className="weather-icon day" />;
      case "03n":
        return <WiCloud className="weather-icon night" />;
      case "04d":
        return <WiCloudy className="weather-icon day" />;
      case "04n":
        return <WiCloudy className="weather-icon night" />;
      case "09d":
        return <WiDayRain className="weather-icon day" />;
      case "09n":
        return <WiNightAltRainWind className="weather-icon night" />;
      case "10d":
        return <WiDayRain className="weather-icon day" />;
      case "10n":
        return <WiNightAltRain className="weather-icon night" />;
      case "11d":
        return <WiDayThunderstorm className="weather-icon day" />;
      case "11n":
        return <WiNightAltLightning className="weather-icon night" />;
      case "13d":
        return <WiSnowflakeCold className="weather-icon day" />;
      case "13n":
        return <WiSnowflakeCold className="weather-icon night" />;
      case "50d":
        return <WiFog className="weather-icon day" />;
      case "50n":
        return <WiNightFog className="weather-icon night" />;
      default:
        return <WiNa className="weather-icon day" />;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  async function getWeather() {
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
      const wind_speed = city_data.wind.speed;
      const icon = city_data.weather[0].icon;
      setName(city_name);
      setDescription(city_description);
      setFeelsLike(feels_like);
      setHumidity(city_humidity);
      setCurrentTemp(current_temp);
      setMinTemp(min_temp);
      setMaxTemp(max_temp);
      setWindSpeed(wind_speed);
      setIcon(icon);
    } catch (error) {
      setIcon("na");
      console.log("Error happened: ", error);
    }
  }

  useEffect(() => {
    getWeather();
    return () => {};
  }, [fahrenheit, name]);

  return (
    <div className="App">
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} height="45" />
        </a>
        <div className="input-group input-group-sm my-2">
          <input
            id="search-bar"
            type="search"
            onChange={handleChange}
            className="form-control text-light bg-dark"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={getWeather}
          >
            enter
          </button>
        </div>
        <button onClick={changeScale} type="button" className="btn btn-light">
          <WiCelsius /> / <WiFahrenheit />
        </button>
      </nav>
      <main className="row">
        <div className="container main-text">
          <p>{find(icon)}</p>
          <h3>{name}</h3>
          <h1>
            {Math.round(currentTemp)}
            <sup>{fahrenheit ? <WiFahrenheit /> : <WiCelsius />}</sup>
          </h1>
          <h2>{capitalize(description)}</h2>
        </div>
        <div className="sidebar">
          <h4>Details</h4>
          <div className="grid-item">
            <WiThermometerExterior className="sidebar-icon" />
            <p>Feels Like </p>
            <p className="sidebar-info">
              {Math.round(feelsLike)}
              <sup>{fahrenheit ? <WiFahrenheit /> : <WiCelsius />}</sup>
            </p>
          </div>
          <div className="grid-item">
            <WiHumidity className="sidebar-icon" />
            <p>Humidity</p>
            <p className="sidebar-info">{humidity}%</p>
          </div>
          <div className="grid-item">
            <WiStrongWind className="sidebar-icon" />
            <p>Wind Speed</p>
            <div className="wind">
              <p className="wind-degrees sidebar-info">
                {windSpeed} {fahrenheit ? "mph" : "knots"}
              </p>
            </div>
          </div>
          <div className="grid-item">
            <WiThermometer className="sidebar-icon" />
            <p>High | Low</p>
            <p className="sidebar-info">
              {Math.round(maxTemp)}
              <sup>{fahrenheit ? <WiFahrenheit /> : <WiCelsius />}</sup>|
              {Math.round(minTemp)}
              <sup>{fahrenheit ? <WiFahrenheit /> : <WiCelsius />}</sup>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
