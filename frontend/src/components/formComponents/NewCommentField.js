import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';

import NewCommentInput from './formFields/newCommentInput';
import CommentButton from './formButtons/commentButton';

class NewCommentField extends Component {

  onSubmit(value) {
    const { createComment, postID } = this.props;
    createComment(postID, value);
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

export default reduxForm({
  form: 'NewCommentField',
})(connect(null, { createComment })(NewCommentField));
