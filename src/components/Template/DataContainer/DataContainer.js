import React from "react";
import Graph from "../Graph/Graph";
// Ini template kotak tegangan dkk
import DataListrik from "../DataListrik/DataListrik";
import "./DataContainer.css";

function DataContainer(props) {
  return (
    <div className="DC-container">
      <h1>{props.name}</h1>
      <div className="var-container">
        <DataListrik judul="Tegangan" angka={props.volt} satuan="V" />
        <DataListrik judul="Arus" angka={props.ampere} satuan="A" />
        <DataListrik judul="Daya" angka={props.watt} satuan="W" />
        <DataListrik judul="Energi" angka={props.kWh} satuan="kWh" />
        <DataListrik judul="Efisiensi" angka={props.percent} satuan="%" />
      </div>
      <Graph data={props.graph_data} options={props.graph_options}/>
    </div>
  );
}

export default DataContainer;
