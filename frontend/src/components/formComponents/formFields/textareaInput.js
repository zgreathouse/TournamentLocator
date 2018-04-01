import React from 'react';

const TextareaInput = (field) => {

  return (
    <div>
      <label>{field.label}</label>
      <br/>
      <textarea
        placeholder="Anything you'd like to add?"
        rows="8"
        cols="80"
        {...field.input}
      />
    </div>
  )
}

export default TextareaInput;
