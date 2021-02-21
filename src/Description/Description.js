import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div id="temp-description" className="col">
      <h3 id="description">Light rain</h3>
      <img src="" alt="" id="icon" />
      <p className="attributes">
        Humidity: <span id="humidity"> 94</span>% <br />
        Wind: <span id="wind">2</span>km/h
      </p>
    </div>
  );
}
