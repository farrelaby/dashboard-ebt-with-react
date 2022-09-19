import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faSolarPanel, faChartLine } from "@fortawesome/free-solid-svg-icons";


const logo_width = 30;

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-item">
          <div className="nav-img">
            <FontAwesomeIcon icon={faChartLine} size='xl' />
          </div>
          <div className="nav-text">Dashboard</div>
        </div>
        <div className="nav-item">
          <div className="nav-img">
            <FontAwesomeIcon icon={faSolarPanel} size='xl' />
          </div>
          <div className="nav-text">PV</div>
        </div>
        <div className="nav-item">
          <div className="nav-img">
            <FontAwesomeIcon icon={faFan} size='xl'/>
          </div>
          <div className="nav-text">Wind</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
