import React from 'react';

const NewCommentInput = (field) => {
  const { touched, error } = field.meta;

  return (
    <div className="comment-input-container">
      <input type="text" className="new-comment" {...field.input}/>
      <div>{touched && error}</div>
    </div>
  )
}

export default NewCommentInput;