import "./App.css";
import logo from "./img/logo.webp";
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
        return <WiDaySunny className="weather-icon " />;
      case "01n":
        return <WiNightClear className="weather-icon " />;
      case "02d":
        return <WiDayCloudy className="weather-icon" />;
      case "02n":
        return <WiNightAltCloudy className="weather-icon" />;
      case "03d":
        return <WiCloud className="weather-icon" />;
      case "03n":
        return <WiCloud className="weather-icon" />;
      case "04d":
        return <WiCloudy className="weather-icon" />;
      case "04n":
        return <WiCloudy className="weather-icon" />;
      case "09d":
        return <WiDayRain className="weather-icon" />;
      case "09n":
        return <WiNightAltRainWind className="weather-icon" />;
      case "10d":
        return <WiDayRain className="weather-icon" />;
      case "10n":
        return <WiNightAltRain className="weather-icon" />;
      case "11d":
        return <WiDayThunderstorm className="weather-icon" />;
      case "11n":
        return <WiNightAltLightning className="weather-icon" />;
      case "13d":
        return <WiSnowflakeCold className="weather-icon" />;
      case "13n":
        return <WiSnowflakeCold className="weather-icon" />;
      case "50d":
        return <WiFog className="weather-icon" />;
      case "50n":
        return <WiNightFog className="weather-icon" />;
      default:
        return <WiNa className="weather-icon" />;
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
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
      }
    }

    getWeather();
    return () => {};
  }, [fahrenheit, city]);

  return (
    <div className="App">
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img
            className="nav-logo"
            src={logo}
            height="45"
            alt="openweathermap logo"
          />
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
            onClick={() => setCity(name)}
          >
            enter
          </button>
          <button onClick={changeScale} type="button" className="btn btn-scale">
            F | C
          </button>
        </div>
      </nav>
      <main className="row">
        <div className="container temperature">
          <h1 className="temperature--numbers">
            {Math.round(currentTemp)}
            {fahrenheit ? (
              <WiFahrenheit className="temperature--scale" />
            ) : (
              <WiCelsius className="temperature--scale" />
            )}
          </h1>
          <h3 className="city">{capitalize(city)}</h3>
          <div className="description">
            {find(icon)}
            <h3>{capitalize(description)}</h3>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-cities">
            <h3 className="sidebar-city" onClick={() => setCity("Austin")}>
              Austin
            </h3>
            <h3 className="sidebar-city" onClick={() => setCity("New York")}>
              New York
            </h3>
            <h3 className="sidebar-city" onClick={() => setCity("Los Angeles")}>
              Los Angeles
            </h3>
            <h3 className="sidebar-city" onClick={() => setCity("Phoenix")}>
              Pheonix
            </h3>
          </div>
          <div className="sidebar-weather">
            <h3 className="sidebar-title">Weather Details</h3>
            <div className="grid">
              <div className="grid-item">
                <div className="sidebar-icon__container">
                  <WiThermometerExterior className="sidebar-icon" />
                  <p>Feels Like </p>
                </div>
                <p className="sidebar-info">
                  {Math.round(feelsLike)}
                  {fahrenheit ? <WiFahrenheit /> : <WiCelsius />}
                </p>
              </div>
              <div className="grid-item">
                <div className="sidebar-icon__container">
                  <WiHumidity className="sidebar-icon" />
                  <p>Humidity</p>
                </div>
                <p className="sidebar-info">{humidity}%</p>
              </div>
              <div className="grid-item">
                <div className="sidebar-icon__container">
                  <WiStrongWind className="sidebar-icon" />
                  <p>Wind Speed</p>
                </div>
                <p className="wind-degrees sidebar-info">
                  {windSpeed} {fahrenheit ? "mph" : "knots"}
                </p>
              </div>
              <div className="grid-item">
                <div className="sidebar-icon__container">
                  <WiThermometer className="sidebar-icon" />
                  <p>High | Low</p>
                </div>
                <p className="sidebar-info">
                  {Math.round(maxTemp)}
                  {fahrenheit ? <WiFahrenheit /> : <WiCelsius />}|<span> </span>
                  {Math.round(minTemp)}
                  {fahrenheit ? <WiFahrenheit /> : <WiCelsius />}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
