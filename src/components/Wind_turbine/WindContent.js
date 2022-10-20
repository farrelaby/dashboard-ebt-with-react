import React, { useState } from "react";
import "./WindContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";

function WindContent() {
  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);

  // Graph
  const data_daya = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [1, 5, 8, 9, 10],
        backgroundColor: "Transparent",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
      },
    ],
  };
  const data_energi = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [20, 5, 11, 9, 10],
        backgroundColor: "Transparent",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
      },
    ],
  };
  const options = {};
  // End of graph

  return (
    <div className="content">
      <h1>
        <b>Wind Turbine</b>
      </h1>
      <div className="content-container">
        <DataContainer
          name="⚡ Direct Current (DC) ⚡"
          watt={watt}
          kWh={kWh}
          graph_daya_data={data_daya}
          graph_energi_data={data_energi}
          graph_options={options}
        />
        <div className="Env-container"></div>
      </div>
    </div>
  );
}

export default WindContent;
