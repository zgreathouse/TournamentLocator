import React from 'react';

const TextareaInput = (field) => {
  return (
    <div className="input-container">
      {field.label ? <label>{field.label}</label>: <div></div>}
      <br/>
      <textarea
        placeholder={field.placeholder}
        rows="10"
        cols="86"
        {...field.input}
      />
    </div>
  )
}

export default TextareaInput;
