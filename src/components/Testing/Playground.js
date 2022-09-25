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
      refetchInterval: 1000,
    }
  );

  const [volt, setVolt] = useState(0);
  const [ampere, setAmpere] = useState(0);
  const [watt, setWatt] = useState(0);
  const [kWh, setKWh] = useState(0);
  const [percent, setPercent] = useState(0);

  const [list,setList] = useState([1, 5, 8, 9, 10, 12]);

  const udpateList = () => {
    setList(prev => [...prev,catData?.length]);
    // const newData = [first,...list];
    setList(list => list.slice(-5))

  }

  const updateAmpere = (val) => {
    setAmpere(val + 5);
    setWatt(ampere + 5);
    setKWh(watt + 5);
  };

  useEffect(() => {
    updateAmpere(catData?.length);
    udpateList();

    console.log(list);
  }, [catData?.length]);

  

  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: list,
        backgroundColor: "Transparent",
        borderColor: "#3751FF",
        pointBorderColor: "#3751FF",
        pointBorderWidth: 5,
      },
    ],
  };
  const options = {};
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
          graph_data={data}
          graph_options={options}
        />
        <div className="Env-container"></div>
      </div>
    </div>
  );
}

export default Playground;
