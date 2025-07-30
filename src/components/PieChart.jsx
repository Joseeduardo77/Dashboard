import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: ["#F59E0B", "#3B82F6", "#10B981"],
      },
    ],
  };

  return (
    <div className="card">
      <h2>Dispositivos de Acesso</h2>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;