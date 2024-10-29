import { state } from "@/app/Interfaces/state";
import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const income = useSelector((state: state) => state.income);
  const subtotal_income = income.reduce(
    (acc: number, curr: { name: string; price: number }) => acc + curr.price,
    0
  );
  // 50% de la somme des revenus
  const obligatory = subtotal_income * 0.5;
  const hobbies = subtotal_income * 0.3;
  const savings = subtotal_income * 0.2;

  return (
    <div className="w-9/12 rounded-sm ">
      <h3 className="text-xl font-semibold text-[#6E56CF]">
        Conseils (50/30/20)
      </h3>
      <div className="flex flex-row justify-between px-2 py-1 border-b-2 my-2">
        <span>Revenus</span>
        <span>{subtotal_income}€</span>
      </div>
      <div className="flex flex-row justify-between px-2 py-1 border-b-2">
        <span>Charge obligatoire</span>
        <span>{obligatory}€</span>
      </div>
      <div className="flex flex-row justify-between px-2 py-1 border-b-2">
        <span>Loisirs</span>
        <span>{hobbies}€</span>
      </div>
      <div className="flex flex-row justify-between px-2 py-1  ">
        <span>Epargne</span>
        <span>{savings}€</span>
      </div>
    </div>
  );
}

export default Details;
