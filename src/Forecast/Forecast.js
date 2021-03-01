import React, { useState } from "react";
import "./Forecast.scss";
import axios from "axios";
import WeatherIcon from "../WeatherIcon";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastUpdate(response){
setForecast(response.data);
setLoaded(true);

  }

  if (loaded && props.city === forecast.city.name){
    return(
    <div className="Forecast row">

          <ForecastInfo data={forecast.list[0]} />
          <ForecastInfo data={forecast.list[1]} />
            <ForecastInfo data={forecast.list[2]} />
             <ForecastInfo data={forecast.list[3]} />
              <ForecastInfo data={forecast.list[4]} />
      
       </div>
    ) 
  }else{
  let apiKey='dc56a0fdc815a8ed54bd6518609ecbc3';
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastUpdate);
    return null;
  }
 
}



/*
    <section className="forecast">
      <div className="row">
        <div classname="col">
        <h4 className="forecast__day">Mon</h4>
        <p className="forecast__temp">2/4</p>
        </div>
          <div className="col">
        <h4 className="forecast__day">Mon</h4>
        <p className="forecast__temp">2/4</p>
        </div>
          <div className="col">
        <h4 className="forecast__day small">Mon</h4>
        <p className="forecast__temp">2/4</p>
        </div>
         
         
</div>
    </section>*/