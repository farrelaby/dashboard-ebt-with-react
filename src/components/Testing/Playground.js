import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "./Playground.css";
import DataContainer from "../Template/DataContainer/DataContainer";

function Playground() {
  const { data: catData } = useQuery(
    ["cat"],
    () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
    {
      refetchInterval: 1500,
    }
  );

  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);
  const [percent, setPercent] = useState(0);

  const [list, setList] = useState([1, 5, 8, 9, 10, 12]);
  const [list_2, setList_2] = useState([1, 5, 8, 9, 10, 12]);

  const udpateList = () => {
    setList((prev) => [...prev, catData?.length]);
    // const newData = [first,...list];
    setList((list) => list.slice(-5));
  };

  const udpateList_2 = () => {
    setList_2((prev) => [...prev, catData?.length + 50]);
    // const newData = [first,...list];
    setList_2((list_2) => list_2.slice(-5));
  };

  const updateAmpere = (val) => {
    setAmpere(val + 5);
    setWatt(ampere + 5);
    setKWh(watt + 5);
  };

  useEffect(() => {
    updateAmpere(catData?.length);
    udpateList();
    udpateList_2();
    console.log(list);
  }, [catData?.length]);

  const data_daya = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: list,
        backgroundColor: "#3751FF",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
        yAxisID: "y",
        label: "Daya",
      },
      {
        data: list_2,
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
  // End of graph

  return (
    <div className="content">
      <h1>
        <b>Testing Zone</b>
      </h1>
      <div className="content-container">
        <DataContainer
          name="API TESTING"
          volt={catData?.length}
          ampere={ampere}
          watt={watt}
          kWh={kWh}
          percent={percent}
          graph_daya_data={data_daya}
          graph_energi_data={data_daya}
        />
        <div className="Env-container"></div>
      </div>
    </div>
  );
}

export default Playground;
