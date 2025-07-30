import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Vendas (R$)",
        data: [1200, 1900, 3000, 2500, 2000, 3100],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return (
    <div className="card">
      <h2>Vendas Mensais</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;