import React, { useState } from "react";
import "./Searchbar.scss";
import axios from "axios";
import FormattedDate from "../FormattedDate";
import WeatherInfo from "../WeatherInfo";
import Forecast from "../Forecast/Forecast";


export default function Searchbar(props) {
  let [city, setCity]=useState(props.defaultCity);
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
      date:new Date(response.data.dt * 1000),
      icon:response.data.weather[0].icon
   
    });
   

  }

  function search(){
  
  const apiKey="dc56a0fdc815a8ed54bd6518609ecbc3";
  let apiURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  }
  function handleSubmit(event){
event.preventDefault();
    search();
  }

  function handleCity(event){
setCity(event.target.value);

  }
  if (weatherData.ready){
    return (
    <section className="searchbar">
       <div className="row">
           <div className="col">
             <p className="searchbar__dot">  </p>
             </div>
              <div className="col">
               <FormattedDate date = {weatherData.date}/>
           </div> 
            <div className="col">
              <i className="fa fa-battery-full"></i>
              <i className="fa fa-wifi"></i>
              <i className="fa fa-signal"></i>
              </div>
        </div>
    <form  className="input-group mb-3" onSubmit={handleSubmit}> 

  <input type="search" className="form-control" placeholder="Enter city..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleCity}/>
  <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="fa fa-search"></i></button>
</form>
   <WeatherInfo data = {weatherData} className="p-0"/>  
  <Forecast city={weatherData.city}/>
 </section>
  );
  }else{
  
  search();
  return ("loading");
  }
}
