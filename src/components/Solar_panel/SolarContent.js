import React, { useState } from "react";
import "./SolarContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";
import { useEffect } from "react";

function SolarContent() {
  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isAC, setIsAC] = useState(true);

  const changeAC = () => {
    setIsAC(true);
  };

  const changeDC = () => {
    setIsAC(false);
  };

  useEffect(() => {
    console.log(isAC);
  }, [isAC]);

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
      <h1 className="mb-8">
        <b>Solar Panel</b>
      </h1>
      <div className="flex flex-row gap-8 items-center justify-center">
        <button
          onClick={changeAC}
          className={`${
            isAC
              ? `bg-[hsl(219,45%,91%)] text-[#1a5ee6]`
              : `bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)] text-white`
          }  font-bold mt-4 rounded shadow-md`}
        >
          AC
        </button>
        <button
          onClick={changeDC}
          className={`${
            !isAC
              ? `bg-[hsl(219,45%,91%)] text-[#1a5ee6]`
              : `bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)] text-white`
          }  font-bold mt-4 rounded shadow-md`}
        >
          DC
        </button>
      </div>
      {isAC ? (
        <div className="content-container">
          <DataContainer
            watt={watt}
            kWh={kWh}
            graph_daya_data={data_daya}
            graph_energi_data={data_energi}
            graph_options={options}
          />
          <div className="Env-container"></div>
        </div>
      ) : (
        <h1>WORK IN PROGRESS</h1>
      )}
    </div>
  );
}

export default SolarContent;
