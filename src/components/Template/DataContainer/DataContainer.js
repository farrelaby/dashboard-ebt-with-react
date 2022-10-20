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
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 mt-2 rounded-md shadow-lg">
                <div className="text-white">Dari</div>
                <DatePicker value={startDate} onChange={setStartdate} />
              </div>
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 mt-2 rounded-md shadow-lg">
                <div className="text-white">Sampai</div>
                <DatePicker value={endDate} onChange={setEnddate} />
              </div>
            </div>
            {console.log(startDate)}
            <Graph data={props.graph_daya_data} options={props.graph_options} />
          </>
        ) : (
          <>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 mt-2 rounded-md shadow-lg">
                <div className="text-white">Tanggal</div>
                <DatePicker value={startDate} onChange={setStartdate} />
              </div>
            </div>
            <Graph
              data={props.graph_energi_data}
              options={props.graph_options}
            />
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
