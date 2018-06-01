//Component which renders the errors for required components
import React from 'react';

const Errors = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="errors-container">
      <div className="form-field-error">{touched && error}</div>
    </div>
  )
}

export default Errors;
