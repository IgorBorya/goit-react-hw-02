import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";

function App() {
  return (
    <>
      <Description></Description>
      <Options></Options>
    </>
  );
}

export default App;
