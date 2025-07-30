import React from "react";
import "./index.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="container">
      <h1>Dashboard de Dados</h1>
      <div className="grid">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App
