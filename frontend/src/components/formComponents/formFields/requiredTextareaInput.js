import React from 'react';

const RequiredTextareaInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="input-container">
      <label>{field.label}</label>
      <br/>
      <textarea
        placeholder="Questions or comments..."
        rows="8"
        cols="80"
        {...field.input}
      />
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default RequiredTextareaInput;
