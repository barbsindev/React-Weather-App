import React from "react";
import "./styles.css";
import Searchbar from "./Searchbar/Searchbar";
import City from "./City/City";
import Temperature from "./Temperature/Temperature";
import Description from "./Description/Description";
import Forecast from "./Forecast/Forecast";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Searchbar />
        <div id="main-content">
          <div className="row">
            <City />
            <Temperature />
            <Description />
            <Forecast />
          </div>
        </div>
        <a href="https://github.com/barbsindev/React-Weather-App" className="git-link" target="_blank">Open-Source code</a>
      </div>
      
    </div>
  );
}

export default App;
