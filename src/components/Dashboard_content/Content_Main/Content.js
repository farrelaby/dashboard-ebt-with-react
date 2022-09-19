import React from "react";
import DC from "../DC/DC";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <h1><b>Solar Panel</b></h1>
      <div className="content-container">
        <DC 
        name = '⚡ Direct Current (DC) ⚡'
        />
        <DC 
        name = '⚡ Alternating Current (AC) ⚡'
        />
        <div className="Env-container"></div>
      </div>
    </div>
  );
}

export default Content;
