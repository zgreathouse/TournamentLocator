import React from 'react';

const TextInput = (field) => {
  const { touched, error } = field.meta;
  //change styling based on whether the input has been selected
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className} style={{margin: "0 250px 5px 130px"}}>
      <label>{field.label}</label>
      <input type="text" color="#403f42" {...field.input}/>
      <div style={{fontStyle: "italic", color: "#2bbbad"}}>
        {touched && error}
      </div>
    </div>
  )
}

export default TextInput;
