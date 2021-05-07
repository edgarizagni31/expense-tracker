import React from 'react';

import { useForm } from '../hooks/useForm';
import { FormItem } from './FormItem';

export const AddTransaction = ({ setTransactions }) => {
  const [transaction, handleInputChange] = useForm({ desc: "", amount: ""});

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if ( transaction.desc.length === 0 && transaction.amount.length === 0) {
      alert('Los campos no pueden estar vacios.')
      return;
    }


    if ( transaction.desc === null  || transaction.desc.length === 0) {
      alert('Por favor ingrese una descripción.')
      return;
    }

    if ( transaction.desc.length < 3  ) {
      alert('Descripción no valida, tiene que tener más de tres caracteres.')
      return;
    }

    if ( transaction.amount === null ) {
      alert('Por favor ingrese una cantidad.')
      return;
    } 
    
    if ( transaction.amount.length === 0) {
      alert('Cantidad no valida, tiene que ser un valor númerico.')
      return;
    }

    setTransactions((t) => [transaction, ...t]);
    document.querySelector("form").reset();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h2 className = 'fs-6 pb-1 border-bottom border-dark'>Añadir una nueva transacción</h2>
      <FormItem
        id="desc"
        placeholder="Ingrese una descripción"
        label="Descripción"
        handleInputChange={handleInputChange}
      />
      <FormItem
        id="amount"
        placeholder="Ingrese la cantidad"
        label="Cantidad"
        formText = "negativo(-) gasto, positivo(+) ingreso"
        handleInputChange={handleInputChange}
      />

      <button
        type="submit"
        className="w-100 btn btn-primary mb-3 text-align-center mx-auto"
      >
        Añadir transacción
      </button>
    </form>
  );
};
