import React, { useState } from "react";
import Graph from "../Graph/Graph";
// Ini template kotak tegangan dkk
import DataListrik from "../DataListrik/DataListrik";
import "./DataContainer.css";
import { DatePicker } from "@mantine/dates";

function DataContainer(props) {
  const [startDate, setStartdate] = useState(new Date());
  const [endDate, setEnddate] = useState(new Date());

  const [isDaya, setIsDaya] = useState(true);
  const changeDaya = () => {
    setIsDaya(true);
  };
  const changeEnergi = () => {
    setIsDaya(false);
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
          text: isDaya ? "Daya" : "Energi",
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
        display: isDaya ? true : false,
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
    },
  };

  return (
    <div className="var-container">
      <div className="var-graph">
        <div className="flex flex-row gap-8">
          <button
            className={`${
              isDaya
                ? `bg-[hsl(220,80%,50%)]`
                : `bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)]`
            } text-white font-bold mt-4 rounded shadow-md `}
            onClick={() => {
              changeDaya();
            }}
          >
            Daya
          </button>
          <button
            className={`${
              !isDaya
                ? `bg-[hsl(220,80%,50%)]`
                : `bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)]`
            } text-white font-bold mt-4 rounded shadow-md`}
            onClick={() => {
              changeEnergi();
            }}
          >
            Energi
          </button>
        </div>
        {!isDaya ? (
          <>
            {/* INI ENERGI */}
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
                <div className="text-white">Dari</div>
                <DatePicker value={startDate} onChange={setStartdate} />
              </div>
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
                <div className="text-white">Sampai</div>
                <DatePicker value={endDate} onChange={setEnddate} />
              </div>
            </div>
            {console.log(startDate)}
            <Graph data={props.graph_energi_data} options={options} />
          </>
        ) : (
          <>
            {/* INI DAYA */}
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
                <div className="text-white">Tanggal</div>
                <DatePicker value={startDate} onChange={setStartdate} />
              </div>
            </div>
            <Graph data={props.graph_daya_data} options={options} />
          </>
        )}
      </div>
      <div className="var-num ">
        <DataListrik judul="Daya" angka={props.watt} satuan="W" />
      </div>
      <div className=" var-num">
        <DataListrik judul="Energi" angka={props.kWh} satuan="kWh" />
      </div>
    </div>
  );
}

export default DataContainer;
