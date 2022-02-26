import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [currentPLayer, setCurrentPLayer] = useState(-1);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
