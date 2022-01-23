import React, { useState } from "react";
import Header from "./Header";
import MapSection from "./MapSection";
import AppContext from "../context/AppContext";

const App = () => {
  const [skip, setSkip] = useState(true);
  const [ip, setIp] = useState("");
  return (
    <AppContext.Provider value={{ skip, setSkip, ip, setIp }}>
      <Header />
      <MapSection />
    </AppContext.Provider>
  );
};

export default App;
