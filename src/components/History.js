import React from "react";

export const History = ({ transactions } ) => {
  return (
    <section>
      {
          transactions.map( (transaction,index) => {
            const { desc, amount } = transaction;
            return (
                <div key = {index} >
                    { desc }
                    <span> {amount} </span>
                </div>
            )
          })
      }
    </section>
  );
};
