import { SeeMore } from "../Template/SeeMore/SeeMore";
import React, { useState } from "react";
import "./WindContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";

function WindContent() {
  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);

  const label_1 = "Daya";
  const label_2 = "Kec. Angin";

  // Graph
  const data_daya = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [1, 5, 8, 9, 10],
        backgroundColor: "#3751FF",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
        yAxisID: "y",
        label: "Daya",
      },
      {
        data: [10, 15, 8, 19, 20],
        backgroundColor: "#e4e500",
        borderColor: "#e4e500",
        fill: "+1",
        pointBorderColor: "#e4e500",
        pointBorderWidth: 5,
        yAxisID: "y1",
        label: "Kec. Angin",
      },
    ],
  };

  const data_energi = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Energi",
        data: [20, 5, 11, 9, 10],
        backgroundColor: "Transparent",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
        yAxisID: "y",
      },
    ],
  };

  // End of graph

  return (
    <div className="content">
      <h1>
        <b>Wind Turbine</b>
      </h1>
      <div className="wind-content-container">
        <div className="text-center text-white ml-28 z-10">
          <h2>Yogyakarta</h2>
          <div>WORK IN PROGRESS</div>
        </div>
        <DataContainer
          watt={watt}
          kWh={kWh}
          graph_daya_data={data_daya}
          graph_energi_data={data_energi}
        />
        <SeeMore volt={volt} ampere={ampere} />
      </div>
    </div>
  );
}

export default WindContent;
