import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div>
      <form className="search-bar">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control-search"
              placeholder="Enter city..."
            />
          </div>
          <div className="col">
            <button type="submit" className="btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="col">
            <button type="submit" className="current-search-btn">
              Current city
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
