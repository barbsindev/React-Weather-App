import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div id="temperature" className="col">
      <h1>
        <span className="degree-number">5</span>
        <span className="degrees">
          {" "}
          <a href="#" className="celsius">
            °C |
          </a>{" "}
          <a href="#" className="farenheit">
            °F
          </a>
        </span>
      </h1>
    </div>
  );
}
