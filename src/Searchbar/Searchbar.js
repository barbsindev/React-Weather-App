import React, { useState } from "react";
import "./Searchbar.scss";
import axios from "axios";

export default function Searchbar(props) {
  
  let [weatherData, setWeatherData]=useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature:response.data.main.temp,
      city:response.data.name,
      wind:response.data.wind.speed,
      humidity:response.data.main.humidity,
      description:response.data.weather[0].description,
   
    });
   

  }
  if (weatherData.ready){
    return (
    <section className="searchbar">
       <div className="row">
           <div className="col">
             <p className="searchbar__dot">  </p>
             </div>
              <div className="col">
               <p className="searchbar__date">{weatherData.date}</p>
           </div> 
            <div className="col">
              <i className="fa fa-battery-full"></i>
              <i className="fa fa-wifi"></i>
              <i className="fa fa-signal"></i>
              </div>
        </div>
        
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter city..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
</div>
   
   <div className="city">
     
      <h2 className="city_current">{weatherData.city}</h2>
   
  </div>

      <div className="row" >
      <div className="col">
            <h1>
        <span className="temperature_number">{Math.round(weatherData.temperature)}</span>
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
      <h3 className="temperature__description text-capitalize">{weatherData.description}</h3>
        </div>
    <div className="description" >
      <div className="col">
    
      <img src={weatherData.icon} alt={weatherData.description} className="description_icon" />
      <p className="description_attributes">
        Humidity: <span className="desciption_humidity"> {weatherData.humidity}</span>% <br />
        Wind: <span className="description_wind">{weatherData.wind}</span>km/h
      </p>
      </div>
    </div>
    </div>
 </section>
  );
  }else{
  
  const apiKey="dc56a0fdc815a8ed54bd6518609ecbc3";
  let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return ("loading");
  }
}
