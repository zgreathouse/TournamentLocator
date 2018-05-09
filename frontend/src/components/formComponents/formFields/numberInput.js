import React from 'react';

const NumberInput = (field) => {
  const { touched, error } = field.meta;

  let placeholder = '$0.00';

  if (field.label === 'Max Entrants' || field.label === "Travel Range") {
    placeholder = '0';
  }

  let fieldLabel = <label>{field.label}</label>

  if (field.label === "Travel Range") {
    fieldLabel = (
      <label>
        {field.label} <p className="message">(miles)</p>
      </label>
    )
  }

  return (
    <div className="input-container">
      {fieldLabel}
      <br/>
      <input
        type="number"
        min='0'
        placeholder={`${placeholder}`}
        {...field.input}
      />
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default NumberInput;
