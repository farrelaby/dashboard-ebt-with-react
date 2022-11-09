import Navbar from "./components/Navbar/Navbar";
import SolarContent from "./components/Solar_panel/SolarContent";
import WindContent from "./components/Wind_turbine/WindContent";
import { Route, Routes } from "react-router-dom";
import Playground from "./components/Testing/Playground";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const client = new QueryClient();

  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <Navbar />
        <div ref={parent}>
          <Routes>
            <Route path="/" element={<SolarContent />} />
            <Route path="/pv" element={<SolarContent />} />
            <Route path="/wind" element={<WindContent />} />
            <Route path="/test" element={<Playground />} />
          </Routes>
        </div>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
