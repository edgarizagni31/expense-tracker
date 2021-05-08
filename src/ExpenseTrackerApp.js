import React, { useEffect, useState } from "react";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { History } from "./components/History";

import './index.css';

export const ExpenseTrackerApp = () => {
  const initial =  () => JSON.parse(localStorage.getItem('transaction')) || [];
  const [transactions, setTransactions] = useState( initial );

  useEffect( () => {
    localStorage.setItem('transaction', JSON.stringify(transactions) );
  }, [transactions])
  
  return (
    <main className = 'mt-3 mx-auto main'>
      <h1 className = 'fs-4 fw-bold mb-3 text-center'> Registro de Gastos</h1>
      <Balance  transactions = { transactions }/>
      <History transactions = { transactions } setTransactions  = { setTransactions } />
      <AddTransaction setTransactions = { setTransactions } />
    </main>
  );
};
