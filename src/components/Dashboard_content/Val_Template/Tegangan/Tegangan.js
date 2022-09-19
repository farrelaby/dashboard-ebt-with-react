import React from "react";
import "./Tegangan.css";

function Tegangan(props) {
  return (
    <div className="var-voltage">
      <div className="var-judul">{props.judul}</div>
      <div className="var-angka">{props.angka}</div>
      <div className="var-satuan">{props.satuan}</div>
    </div>
  );
}

export default Tegangan;
