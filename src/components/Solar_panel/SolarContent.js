import React, { useState } from "react";
import "./SolarContent.css";
import DataContainer from "../Template/DataContainer/DataContainer";
import { useEffect } from "react";
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

  useEffect(() => {
    console.log(isAC);
  }, [isAC]);

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
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: true,
        fontColor: "#ffffff",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          text: "Daya",
          display: true,
          font: {
            size: 14,
          },
        },
        grid: {
          drawOnChartArea: true,
          color: "gray",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          text: "Kec. Angin",
          display: true,
          font: {
            size: 14,
          },
        },
        grid: {
          drawOnChartArea: false,
          color: "white",
        },
      },
      x: {
        grid: {
          // color: "white",
        },
      },
    },
  };
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
          <SeeMore volt={volt} ampere={ampere} />
          <div className="Env-container"></div>
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
