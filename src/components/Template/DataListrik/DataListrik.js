import React from "react";
import "./DataListrik.css";

function DataListrik(props) {
  return (
    <div className="var-voltage">
      <div className="var-judul">{props.judul}</div>
      <div className="var-angka">{props.angka}</div>
      <div className="var-satuan">
        Today
        <br />
        {props.satuan}
      </div>
    </div>
  );
}

export default DataListrik;
