import React, { useState } from "react";
import "./SolarContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";
import DataListrik from "../Template/DataListrik/DataListrik";
import { SeeMore } from "../Template/SeeMore/SeeMore";

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
        label: "Radiasi",
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
  const isWind = false;
  // End of graph

  return (
    <div className="content">
      <div className="flex flex-row my-10">
        <h1 className="flex-1 w-64 text-5xl font-extraboldbold">Solar Panel</h1>
        <div className="flex-1 w-10 flex flex-col text-right mt-4 mr-28 text-slate-50">
          <div className="text-2xl">Yogyakarta</div>

          <p>Cuaca</p>
        </div>
      </div>
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
        <div className="solar-content-container">
          <DataContainer
            watt={watt}
            kWh={kWh}
            graph_daya_data={data_daya}
            graph_energi_data={data_energi}
            isWind={isWind}
          />
          <SeeMore volt={volt} ampere={ampere} />
        </div>
      ) : (
        <div className="flex flex-row gap-4 mt-16 justify-center">
          <div className="env-num w-60 h-60">
            <DataListrik judul="Tegangan" angka={volt} satuan="V" />
          </div>
          <div className="env-num w-60 h-60">
            <DataListrik judul="Arus" angka={ampere} satuan="A" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SolarContent;
