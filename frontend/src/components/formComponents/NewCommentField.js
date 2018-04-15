import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';

import NewCommentInput from './formFields/newCommentInput';
import CommentButton from './formButtons/commentButton';

const FIELD = {
  body: {
    label: 'Body',
    name: 'body',
    type: 'input'
  }
}

class NewCommentField extends Component {

  onSubmit(value) {
    const { createComment, postID, reset } = this.props;
    createComment(postID, value).then(() => {
      reset();
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="comment-field"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field component={NewCommentInput} type="input" name="body" />
        <CommentButton />
      </form>
    )
  }
}

const validate = values => {
  const errors = {};

  //validate inputs
  _.each(FIELD, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Anything you'd like to add?`;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'NewCommentField',
  validate
})(connect(null, { createComment })(NewCommentField));
