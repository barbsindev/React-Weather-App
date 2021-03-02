import React from "react";

import WeatherIcon from "../WeatherIcon";
export default function ForecastInfo(props){
    function hours(){
        let date= new Date (props.data.dt * 1000);
        let hour = date.getHours();
        return `${hour}:00`;  
    }

    function temperature(){
        let temperature= Math.round(props.data.main.temp);
return `${temperature}`;
    }
return(
 <div classname="col-2">
{hours()}
      <WeatherIcon code= {props.data.weather[0].icon} />
      {temperature()}
    </div>
      )
    }