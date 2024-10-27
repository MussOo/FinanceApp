import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

function DoughnutGraph() {
  const data = {
    datasets: [
      {
        data: [300, 50, 100, 42],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
}

export default DoughnutGraph;
