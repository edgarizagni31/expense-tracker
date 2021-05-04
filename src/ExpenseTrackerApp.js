import React, { useState } from "react";

import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { History } from "./components/History";

export const ExpenseTrackerApp = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <h1>Expense Tracker</h1>

      <Balance  transactions = { transactions }/>

      <History transactions = { transactions } />

      <AddTransaction  setTransactions = { setTransactions } />
    </>
  );
};
