import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFan,
  faSolarPanel,
  faChartLine,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-item">
          <div className="nav-img">
            <FontAwesomeIcon icon={faChartLine} size="xl" />
          </div>
          <div className="nav-text">Dashboard</div>
        </div>

        <NavLink to="/pv">
          <div className="nav-item">
            <div className="nav-img">
              <FontAwesomeIcon icon={faSolarPanel} size="xl" />
            </div>
            <div className="nav-text">Solar Panel</div>
          </div>
        </NavLink>

        <NavLink to="/wind">
          <div className="nav-item">
            <div className="nav-img">
              <FontAwesomeIcon icon={faFan} size="xl" />
            </div>
            <div className="nav-text">Wind Turbine</div>
          </div>
        </NavLink>

        <NavLink to="/test">
          <div className="nav-item">
            <div className="nav-img">
              <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" />
            </div>
            <div className="nav-text">Testing Zone</div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
