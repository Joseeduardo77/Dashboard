import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Acessos ao site",
        data: [500, 900, 1500, 1200, 1600, 1800],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,
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
      <h2>Tráfego do Site</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;