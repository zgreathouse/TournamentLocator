import React from 'react';

const TextInput = (field) => {
  const { touched, error } = field.meta;

  let specialClass = "";
  let customStyle = { width: "90%" }

  if (field.label === "Street Address") {
    specialClass = "street-address"
  }

  return (
    <div className={`input-container ${specialClass}`}>
      <label>{field.label}</label>
      <br/>
      <input style={specialClass ? customStyle : {}} type="text" {...field.input} />
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default TextInput;
