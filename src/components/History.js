import React from "react";
import PropTypes from 'prop-types';

import { BsX } from 'react-icons/bs'

export const History = ({ transactions, setTransactions } ) => {
  const handleDelete = ( id ) => {
    setTransactions(  transactions.filter( t => t.id !== id ) ) 
  }

  return (
    <section className = 'w-100 mb-4'>
      <h2 className = 'fs-6 pb-1 border-bottom border-dark'>Historia</h2>
      {
          transactions.length === 0
          ?
          <p>No se ha registrado transacciónes</p>
          :
          transactions.map( (transaction) => {
            const { desc, amount, id } = transaction;
            const borderColor =  ( amount > 0 ) ? 'border-success': 'border-danger';
            return (
                <div 
                  className = {`${borderColor} border-end  shadow-sm border-2 d-flex align-items-center pt-2 pb-2 ps-2 mb-2 row bg-white container ms-0  me-0 row`}
                  key = { id } 
                >
                  <p className = 'mb-0 col'>
                    { desc }
                  </p>
                  <p className = 'col mb-0 text-end'> {amount} </p>
                  <p
                    className = 'col mb-0 text-end text-danger' 
                  > 
                    <BsX className = 'icon-delete' onClick = { () => handleDelete( id ) }  /> 
                  </p>
                </div>
            )
          } )
      }
    </section>
  );
};


History.propTypes = {
  transactions: PropTypes.array.isRequired,
  setTransactions: PropTypes.func.isRequired
}