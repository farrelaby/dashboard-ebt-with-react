import React from "react";
import "./Graph.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Graph() {
  const data = {
    labels : ['1','2','3','4','5'],
    datasets: [{
      data: [1,5,8,9,10],
      backgroundColor: 'Transparent',
      borderColor: '#3751FF',
      pointBorderColor: '#3751FF',
      pointBorderWidth: 5
    }]
  }
  const options = {};

  return (
    <div className="graph-container">
      <h2>Daya vs Radiasi</h2>
      <div className="graph-line">
        {/* <h1>📈</h1> */}
        <Line data={data} options={options}/>
      </div>
    </div>
  );
}

export default Graph;
