import React from 'react';

const FormField = (field) => {
  const { touched, error } = field.meta;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`

  return (
    <div className={className} style={{margin: "0 50px 10px 50px"}}>
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input}/>
      <div className="text-help" style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default FormField;
