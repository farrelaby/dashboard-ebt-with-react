import React, { useEffect, useState } from "react";
import Graph from "../Val_Template/Graph/Graph";
// Ini template kotak tegangan dkk
import Tegangan from "../Val_Template/Tegangan/Tegangan";
import "./DC.css";

function DC(props) {
  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setWatt(ampere * volt);
  }, [ampere, volt]);

  return (
    <div className="DC-container">
      <h1>{props.name}</h1>
      <div className="var-container">
        <Tegangan judul="Tegangan" angka={volt} satuan="V" />
        <Tegangan judul="Arus" angka={ampere} satuan="A" />
        <Tegangan judul="Daya" angka={watt} satuan="W" />
        <Tegangan judul="Energi" angka={kWh} satuan="kWh" />
        <Tegangan judul="Efisiensi" angka={percent} satuan="%" />
      </div>
      <Graph />
    </div>
  );
}

export default DC;
