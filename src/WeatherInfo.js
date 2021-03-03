import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props){
return(
    <section>
         <FormattedDate date = {props.data.date}/> 
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