import React from "react";
import "./Graph.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#ffffff";

function Graph(props) {
  return (
    <div className="graph-container ">
      <div className="graph-line ">
        {/* <h1>📈</h1> */}
        <Line data={props.data} options={props.options} />
      </div>
    </div>
  );
}

export default Graph;
