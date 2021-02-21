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
      </div>
    </div>
  );
}

export default App;
