import React from 'react';

const NewCommentInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="comment-input-container">
      <input type="text" {...field.input}/>
      <div className="comment-error">{touched && error}</div>
    </div>
  )
}

export default NewCommentInput;
