import React, { useState } from "react";
import Header from "./Header";
import MapSection from "./MapSection";
import AppContext from "../context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [skip, setSkip] = useState(true);
  const [ip, setIp] = useState("");
  return (
    <AppContext.Provider value={{ skip, setSkip, ip, setIp }}>
      <Header />
      <MapSection />
      <ToastContainer limit={3} />
    </AppContext.Provider>
  );
};

export default App;
