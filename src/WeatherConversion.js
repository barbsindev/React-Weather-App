import React, { useState } from "react";

export default function WeatherConversion(props){
     const [unit, setUnit] = useState("celsius");
     function convertTofahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
     }
     function convertToCelsius(event){
         event.preventDefault();
         setUnit("celsius");
     }
     if(unit==="celsius"){
      
         return(
        
     <section>
             <h1>
        <span className="temperature_number">{Math.round(props.celsius)}</span>
        <span className="temperature_units">
          {" "}
          <a href="#" className="temperature_celsius" >
            °C |
          </a>{" "}
          <a href="#" className="temperature_farenheit" onClick = {convertTofahrenheit}>
            °F
          </a>
        </span>
      </h1>
       </section>
         )
     }else{  
         let fahrenheit = (props.celsius * 9) / 5 + 32;
return (

 
    <section>
             <h1>
        <span className="temperature_number">{Math.round(fahrenheit)}</span>
        <span className="temperature_units">
          {" "}
          <a href="#" className="temperature_celsius" onClick = {convertToCelsius}>
            °C |
          </a>{" "}
          <a href="#" className="temperature_farenheit" >
            °F
          </a>
        </span>
      </h1>
       </section>
);
     }
   
}