import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useSelector } from "react-redux";
import store from "@/context/store";
Chart.register(ArcElement);

function DoughnutGraph() {
  const [data, setData] = React.useState(null);
  const expenses = useSelector((state: any) => state.expenses);
  const income = useSelector((state: any) => state.income);

  useEffect(() => {
    const value: number[] = [];
    const colors: string[] = [];

    expenses.map((expense) => {
      value.push(expense.subtotal);
      colors.push(expense.color);
    });

    const subtotal_income = income.reduce((acc, curr) => acc + curr.price, 0);
    value.push(subtotal_income);
    colors.push("#46A758");

    const data = {
      datasets: [
        {
          data: value,
          backgroundColor: colors,
          hoverOffset: 4,
        },
      ],
    };
    setData(data);
  }, [expenses, income]);

  return (
    <>
      {data && expenses ? (
        <Doughnut data={data} />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
          <path
            fill="none"
            stroke="#A762FF"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="300 385"
            stroke-dashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animate>
          </path>
        </svg>
      )}
    </>
  );
}

export default DoughnutGraph;
