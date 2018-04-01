import React from 'react';

const RequiredTextareaInput = (field) => {
  const { touched, error } = field.meta;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <br/>
      <textarea
        placeholder="Questions or comments..."
        rows="8"
        cols="80"
        {...field.input}
      />
      <div>
        {touched && error}
      </div>
    </div>
  )
}

export default RequiredTextareaInput;
