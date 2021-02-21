import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="col">
      <h2 id="current-city">London</h2>
      <p className="update-time">Last updated:</p>
      <h3 id="current-date">Friday 23:00</h3>
    </div>
  );
}
