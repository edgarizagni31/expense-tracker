import React from "react";

import { useForm } from "../hooks/useForm"

export const AddTransaction = ( { setTransactions } ) => {
  const [transaction, handleInputChange] = useForm( { } );

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    setTransactions( t => [ transaction, ...t] );
    document.querySelector("form").reset();
  }  

  return (
    <form onSubmit = { handleSubmitForm } >
      <label htmlFor="desc" className="form-label">Descripción</label>
      <input 
        type = "text" 
        id = "desc" 
        placeholder = "Ingrese una descripción" 
        className = "form-control" 
        name = "desc"
        onChange = { handleInputChange }
        autoComplete = "off"
      />
      <label htmlFor="mount" className="form-label">Cantidad</label>
      <p>negativo(-) gasto, positivo(+) ingreso</p>
      <input 
        type = "text" 
        id = "amount" 
        name = "amount"
        placeholder = "Ingrese la cantidad" 
        className = "form-control"
        onChange = { handleInputChange }
        autoComplete = "off"
      />
      <button type = "submit" className = "btn btn-primary"  >Añadir transacción</button>
    </form>
  );
};
