import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2d2e2f";
    }
  };
  return (
    <>
      <Navbar title="Sopan Roy" mode={mode} toggleTheme={toggleTheme} />,
      <Routes>
        <Route
          path="/"
          element={
            <div className="container my-3">
              <Textform heading="Enter your text below..." mode={mode} />
            </div>
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
      {/* <About mode={mode} /> */}
    </>
  );
}
export default App;
