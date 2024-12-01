import React from "react";
import { CanvasProvider } from "./Context/context";
import Navbar from "./Components/Navbar";
import Canvas from "./Components/Canvas";
import Tools from "./Components/Tools";

function App() {
  return (
    <CanvasProvider>
      <Navbar/>
      <Canvas/>
      <Tools/>
    </CanvasProvider>
  );
}

export default App;
