import React from 'react';

const NumberInput = (field) => {
  const { touched, error } = field.meta;

  let placeholder = '$0.00';

  if (field.label === 'Max Entrants' || field.label === "Travel Range") {
    placeholder = '0';
  }

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <input
        type="number"
        min='0'
        placeholder={`${placeholder}`}
        {...field.input}
      />
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default NumberInput;
