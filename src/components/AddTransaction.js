import React from 'react';

import { useForm } from '../hooks/useForm';
import { FormItem } from './FormItem';
import Swal from 'sweetalert2';

const createAlert = ( text) => {
  return Swal.fire({
    title: 'Error!',
    text: text,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}

export const AddTransaction = ({ setTransactions }) => {
  const [transaction, handleInputChange] = useForm({ desc: "", amount: ""});
  const regexNumber = /[1-9]+/;

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if ( transaction.desc.length === 0 && transaction.amount.length === 0) {
      createAlert('Los campos no pueden estar vacios.');
      return;
    }

    if ( transaction.desc === null  || transaction.desc.length === 0) {
      createAlert('Por favor ingrese una descripción.')
      return;
    }

    if ( regexNumber.test(transaction.desc) ) {
      createAlert('Descripción no valida, no puede ser un valor númerico.');
      return;
    }

    if ( transaction.desc.length < 3 && !regexNumber.test(transaction.desc) ) {
      createAlert('Descripción no valida, tiene que tener 3 caracteres como minimo.');
      return;
    }

    if ( transaction.amount === null ) {
      createAlert('Por favor ingrese una cantidad.')
      return;
    } 
    
    if ( transaction.amount.length === 0 || !regexNumber.test(transaction.amount)  ) {
      createAlert('Cantidad no valida, tiene que ser un valor númerico.')
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
