import React from 'react';
import PropTypes from 'prop-types';
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

export const AddTransaction = ({ setTransactions, initialState = {desc: "", amount: ""} } ) => {
  const [transaction, handleInputChange, resetData ] = useForm(initialState);
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

    if ( transaction.amount === null ) {
      createAlert('Por favor ingrese una cantidad.')
      return;
    } 
    
    if ( transaction.amount.length === 0 || !regexNumber.test(transaction.amount)  ) {
      createAlert('Cantidad no valida, tiene que ser un valor númerico.')
      return;
    }

    setTransactions((t) => [transaction, ...t]); 
    document.querySelectorAll('input').forEach( (input) => input.value = '' );
    resetData();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h2 className = 'fs-6 pb-1 border-bottom border-dark'>Añadir una nueva transacción</h2>
      <FormItem
        id = 'desc'
        placeholder = 'Ingrese una descripción'
        label = 'Descripción'
        handleInputChange = {handleInputChange}
      />
      <FormItem
        id = 'amount'
        placeholder = 'Ingrese la cantidad'
        label = 'Cantidad'
        formText = 'negativo(-) gasto, positivo(+) ingreso'
        handleInputChange = {handleInputChange}
      />
      <button
        type = 'submit'
        className = 'w-100 btn btn-primary mb-3 text-align-center mx-auto'
      >
        Añadir transacción
      </button>
    </form>
  );
};

AddTransaction.propTypes = {
  setTransactions: PropTypes.func.isRequired
}