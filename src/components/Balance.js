import React from "react";

import { getStatistics } from "../helpers/getStatistics";

export const Balance = ({ transactions }) => {
  const { totalIcome, totalExpense, balance } = getStatistics( transactions );

 
  return (
    <section>
      <p> Tu balance </p>
      <p> {balance} </p>
      <div>
        <div>
          <p>Ingresos</p>
          <p>{totalIcome}</p>
        </div>
        <div>
          <p>Egresos</p>
          <p> {totalExpense}</p>
        </div>
      </div>
    </section>
  );
};
