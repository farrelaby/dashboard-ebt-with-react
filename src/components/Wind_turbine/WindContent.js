import { SeeMore } from "../Template/SeeMore/SeeMore";
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
        backgroundColor: "#38ff42",
        borderColor: "#38ff42",
        pointBorderColor: "#38ff42",
        pointBorderWidth: 5,
        yAxisID: "y",
      },
    ],
  };

  // End of graph

  return (
    <div className="content">
      <div className="flex flex-row my-10">
        <h1 className="flex-1 w-64 text-5xl font-extraboldbold">
          Wind Turbine
        </h1>
        <div className="flex-1 w-10 flex flex-col text-right mt-4 mr-28 text-slate-50">
          <div className="text-2xl">Yogyakarta</div>
          <p>Cuaca</p>
        </div>
      </div>
      <div className="wind-content-container">
        <DataContainer
          watt={watt}
          kWh={kWh}
          graph_daya_data={data_daya}
          graph_energi_data={data_energi}
          isWind
        />
        <SeeMore volt={volt} ampere={ampere} />
      </div>
    </div>
  );
}

export default WindContent;
