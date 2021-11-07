import React from "react";
import { WiDayCloudyGusts } from "react-icons/wi";
import { useState } from "react";

const Card = ({
  name,
  description,
  currentTemp,
  minTemp,
  maxTemp,
  feelsLike,
  humidity,
  windDeg,
  windSpeed,
}) => {
  const capitalize = (txt) => {
    console.log(txt);
    // if (txt == "" || txt.length == 0) return "";
    // const lower = txt.lower;
    // const words = lower.split("");
    // words.map((word) => {
    //   const first = word.charAt(0);
    //   const upper = first.toUpperCase();
    //   let rest = word.slice(1);
    //   return upper + rest.toLowerCase();
    // });
    // return words.join(" ");
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      {/* <h2>{capitalize(description)}</h2> */}
      <h2>Description: {description}</h2>
      <h3>Current: {currentTemp}</h3>
      <h3>Min: {minTemp}</h3>
      <h3>Max: {maxTemp}</h3>
      <h3>Feels Like: {feelsLike}</h3>
      <h3>Humidity: {humidity}</h3>
      <h3>Wind Deg: {windDeg}</h3>
      <h3>Wind Speed: {windSpeed}</h3>
      <WiDayCloudyGusts size="3em" className="icon" />
    </div>
  );
};

export default Card;
