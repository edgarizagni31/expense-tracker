import React from 'react'

export const FormItem = ( { label, id, placeholder, handleInputChange, formText } ) => {
    return (
        <div className = 'mb-3' id = 'formItem'>
            <label htmlFor = {id} className = 'form-label mb-0'>{label}</label>

            { formText !== "" && <p className = 'form-text mt-0'> { formText } </p> }

            <input 
              type = 'text'
              id = { id }
              name = { id }
              placeholder = { placeholder } 
              className = 'form-control'
              onChange = { handleInputChange }
              autoComplete = 'off'
            />
        </div>
    )
}
