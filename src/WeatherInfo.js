import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props){
return(
    <section>
    <div className="city">
     
      <h2 className="city_current">{props.data.city}</h2>
   
  </div>

      <div className="row" >
      <div className="col">
          <WeatherConversion celsius={props.data.temperature}/>
           
      <h3 className="temperature__description text-capitalize">{props.data.description}</h3>
        </div>
    <div className="description" >
      <div className="col">
    <WeatherIcon code={props.data.icon}/>
      <img src={props.data.icon} alt={props.data.description} className="description_icon" />
      <p className="description_attributes">
        Humidity: <span className="desciption_humidity"> {props.data.humidity}</span>% <br />
        Wind: <span className="description_wind">{props.data.wind}</span>km/h
      </p>
      </div>
    </div>
    </div>
    </section>
)
}