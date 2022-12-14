import React from "react";

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
    <div className="w-[700px] mb-4 mt-6">
      {/* <h1>📈</h1> */}
      <Line data={props.data} options={props.options} />
    </div>
  );
}

export default Graph;
