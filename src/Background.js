import clear from "./images/clear.jpg";
import cloudy from "./images/cloudy.jpg";
import fog from "./images/fog.jpg";
import icecrystals from "./images/ice-crystals.jpg";
import mostlysunny from "./images/mostly-sunny.jpg";
import partlycloudy from "./images/partly-cloudy.jpg";
import rain from "./images/rain.jpg";
import sleet from "./images/sleet.jpg";
import snow from "./images/snow.jpg";
import sunny from "./images/sunny.jpg";
import thunder from "./images/thunder.jpg";
import "./Background.scss";

export default function Bsackground(props){
    const iconMapping = {
    Clear: clear,
    Clouds: cloudy,
    Mist: fog,
    Smoke: cloudy,
    Haze: partlycloudy,
    Dust: fog,
    Fog: fog,
    Sand: cloudy,
    Ash: cloudy,
    Squal: cloudy,
    Tornado: thunder,
    Snow: snow,
    Rain: rain,
    Drizzle: rain,
    Thunderstorm:thunder,
    Sunny:sunny
  };
    return (
    <span className="Icon">
      <img src={iconMapping[props.data]} alt="icon" className="img-fluid"/>
    </span>
  );

}