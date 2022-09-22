import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SolarContent from "./components/Solar_panel/SolarContent";
import WindContent from "./components/Wind_turbine/WindContent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path= "/pv" element= {<SolarContent />} />
      <Route path= "/wind" element= {<WindContent />}/>
    </Routes>
    </>
  );
}

export default App;
