import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SolarContent from "./components/Solar_panel/SolarContent";
import WindContent from "./components/Wind_turbine/WindContent";
import { Route, Routes } from "react-router-dom";
import Playground from "./components/Testing/Playground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/pv" element={<SolarContent />} />
        <Route path="/wind" element={<WindContent />} />
        <Route path="/test" element={<Playground />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
