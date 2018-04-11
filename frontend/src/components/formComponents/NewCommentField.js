import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';

import TextInput from './formFields/textInput';
import CommentButton from './formButtons/commentButton';

class NewCommentField extends Component {

  onSubmit(value) {
    this.props.createComment(this.props.postID, value);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="tournament-form"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field component={TextInput} type="input" label="New Comment" name="body" />
        <CommentButton />
      </form>
    )
  }
}

export default reduxForm({
  form: 'NewCommentField',
})(connect(null, { createComment })(NewCommentField));
