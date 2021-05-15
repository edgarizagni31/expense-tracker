import React from "react";
import PropTypes from 'prop-types';
import { getStatistics } from "../helpers/getStatistics";

export const Balance = ({ transactions }) => {
  const { totalIcome, totalExpense, balance } = getStatistics( transactions );

  return (
    <section className = 'mb-4 container '>
      <div className = 'mb-2'>
        <p className = 'mb-0 p-0'> Tu balance </p>
        <p className = 'fw-bold fs-4 p-0'>S/ {balance}</p>
      </div>
      <article className = 'row'>
        <div className = 'col shadow-sm text-center bg-white me-1 '>
          <p className = 'mt-1'>Ingresos</p>
          <p className = 'text-success'>S/ {totalIcome}</p>
        </div>
        <div className = 'col shadow-sm text-center bg-white'>
          <p className = 'mt-1'>Egresos</p>
          <p className = 'text-danger'>S/ { Math.abs(totalExpense) }</p>
        </div>
      </article>
    </section>
  );
};

Balance.propTypes = {
  transactions: PropTypes.array.isRequired
}