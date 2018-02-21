import React from 'react';

const TextareaInput = (field) => {

  return (
    <div style={{margin: "0 250px 5px 130px"}}>
      <label>{field.label}</label>
      <textarea
        placeholder="Anything you'd like to add?"
        rows="4"
        cols="80"
        {...field.input}
      />
    </div>
  )
}

export default TextareaInput;
