import React from "react";
import "./Graph.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Graph(props) {
  return (
    <div className="graph-container">
      <div className="graph-line">
        {/* <h1>📈</h1> */}
        <Line data={props.data} options={props.options} />
      </div>
    </div>
  );
}

export default Graph;
