import { MonthDate } from "../../Datepicker/MonthDate";
import { SingleDate } from "../../Datepicker/SingleDate";
import { RangeDate } from "../../Datepicker/RangeDate";
import React, { useState } from "react";
import Graph from "../Graph/Graph";
// Ini template kotak tegangan dkk
import DataListrik from "../DataListrik/DataListrik";
import "./DataContainer.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function DataContainer(props) {
  const [renderRef] = useAutoAnimate();

  const [singleDate, setSingleDate] = useState(new Date());
  const [startDate, setStartdate] = useState(new Date());
  const [endDate, setEnddate] = useState(new Date());

  const [isDaya, setIsDaya] = useState(true);
  const changeDaya = () => {
    setIsDaya(true);
  };
  const changeEnergi = () => {
    setIsDaya(!isDaya);
  };

  const [dateRange, setDateRange] = useState("harian");
  const changeDateRange = (e) => {
    setDateRange(e.target.value);
  };

  const [monthDate, setMonthDate] = useState(0);
  const changeMonthDate = (e) => {
    setMonthDate(Number(e.target.value));
  };

  const isWind = props.isWind;

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: true,
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
          text: isWind ? "Kec. Angin" : "Radiasi",
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
    <div className="var-container ">
      <div className="var-graph outline outline-offset-1 outline-1 outline-white rounded-xl shadow-xl bg-gray-900">
        <div className="grid grid-flow-col items-center">
          <div className="flex flex-row gap-4 ml-14">
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
          <>
            <select
              className="relative left-48 mt-5 h-9 w-28 bg-[hsl(220,61%,25%)] text-white rounded-md"
              value={dateRange}
              onChange={changeDateRange}
            >
              <option value="harian">Harian</option>
              <option value="mingguan">Mingguan</option>
              <option value="bulanan">Bulanan</option>
            </select>
          </>
        </div>
        <div ref={renderRef}>
          {!isDaya ? (
            <>
              {/* INI ENERGI */}

              {dateRange === "harian" ? (
                <SingleDate
                  startDate={singleDate}
                  setStartdate={setSingleDate}
                />
              ) : dateRange === "mingguan" ? (
                <RangeDate
                  startDate={startDate}
                  setStartdate={setStartdate}
                  endDate={endDate}
                  setEnddate={setEnddate}
                />
              ) : (
                <MonthDate value={monthDate} onChange={changeMonthDate} />
              )}
              {/* {console.log(startDate)} */}
              <Graph data={props.graph_energi_data} options={options} />
            </>
          ) : (
            <>
              {/* INI DAYA */}
              {dateRange === "harian" ? (
                <SingleDate
                  startDate={singleDate}
                  setStartdate={setSingleDate}
                />
              ) : dateRange === "mingguan" ? (
                <RangeDate
                  startDate={startDate}
                  setStartdate={setStartdate}
                  endDate={endDate}
                  setEnddate={setEnddate}
                />
              ) : (
                <MonthDate value={monthDate} onChange={changeMonthDate} />
              )}
              <Graph data={props.graph_daya_data} options={options} />
            </>
          )}
        </div>
      </div>
      <div className="bg-[#111827] var-num outline outline-offset-1 outline-1 outline-white rounded-xl shadow-xl hover:scale-105 hover:-translate-y-2 transition-transform">
        <DataListrik judul="Daya" angka={props.watt} satuan="W" />
      </div>
      <div className="bg-[#111827] var-num outline outline-offset-1 outline-1 outline-white rounded-xl shadow-xl hover:scale-105 hover:translate-y-2 transition-transform">
        <DataListrik judul="Energi" angka={props.kWh} satuan="kWh" />
      </div>
    </div>
  );
}

export default DataContainer;
