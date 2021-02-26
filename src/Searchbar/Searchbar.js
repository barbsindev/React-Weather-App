import React from "react";
import "./Searchbar.scss";

export default function Searchbar() {
  return (
    <header className="searchbar">
       <div className="row">
           <div className="col">
             <p className="searchbar__dot">  </p>
             </div>
              <div className="col">
               <p className="searchbar__date">Fri 23:00</p>
           </div> 
            <div className="col">
              <i className="fa fa-battery-full"></i>
              <i className="fa fa-wifi"></i>
              <i className="fa fa-signal"></i>
              </div>
        </div>
        
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter city..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
</div>
   
   
  </header>
  );
}
