import React from "react";
import "./App.scss";
import "./index.scss";
import Searchbar from "./Searchbar/Searchbar";
import City from "./City/City";
import Description from "./Description/Description";
import Forecast from "./Forecast/Forecast";


function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <Searchbar defaultCity="London" />
            <City />
            <Description />
            <Forecast />
          </div>
        <footer>
        <a href="https://github.com/barbsindev/React-Weather-App" className="git-link" target="_blank">Open-Source</a> Code by <a href="https://www.linkedin.com/in/barbora-bobalova-629418190/" target="_blank">Barbora Bobalova</a>
    </footer>
    
    </div>
  );
}

export default App;
