import React from "react";
import "./Description.scss";

export default function Description() {
  return (
    <section className="temperature">
      <div className="row">
      <div className="col">
            <h1>
        <span className="temperature_number">5</span>
        <span className="temperature_units">
          {" "}
          <a href="#" className="temperature_celsius">
            °C |
          </a>{" "}
          <a href="#" className="temperature_farenheit">
            °F
          </a>
        </span>
      </h1>
      <h3 className="temperature__description">Light rain</h3></div>
    <div className="description" >
      <div className="col">
    
      <img src="" alt="" className="description_icon" />
      <p className="description_attributes">
        Humidity: <span className="desciption_humidity"> 94</span>% <br />
        Wind: <span className="description_wind">2</span>km/h
      </p>
      </div>
    </div></div>
    </section>
  );
}
