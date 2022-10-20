import React, { useState } from "react";
import "./WindContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";
import DataListrik from "../Template/DataListrik/DataListrik";

function WindContent() {
  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);
  const [isAdv, setIsAdv] = useState(false);

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
      <div className="wind-content-container">
        <div className="text-center text-white ml-28">
          <h3>Yogyakarta</h3>
          <div>Anjas</div>
        </div>
        <DataContainer
          name="⚡ Direct Current (DC) ⚡"
          watt={watt}
          kWh={kWh}
          graph_daya_data={data_daya}
          graph_energi_data={data_energi}
          graph_options={options}
        />
        <div
          id="environment"
          className="flex flex-col gap-8 place-items-center"
        >
          <button
            className="bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)] text-white font-bold mt-7 rounded shadow-md"
            onClick={() => {
              setIsAdv(!isAdv);
            }}
          >
            Advanced Option
          </button>
          {isAdv ? (
            <div className="flex flex-row gap-4">
              <div className="env-num w-60 h-60">
                <DataListrik judul="Daya" angka={10} satuan="W" />
              </div>
              <div className="env-num w-60 h-60">
                <DataListrik judul="Daya" angka={10} satuan="W" />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default WindContent;
