import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editPost } from '../../actions/postActions';
import { FIELDS } from '../../util/postFormFields';

//components
import TextInput from './formFields/textInput';
import RequiredTextareaInput from './formFields/requiredTextareaInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class EditPostForm extends Component {
  renderFields() {
    //TODO need to figure out how to set initial values on a Field

    return _.map(FIELDS, ({ label, name, type }) => {
      if (name === 'title') {
        return <Field key={name} component={TextInput} type={type} label={label} name={name} />
      }

      return <Field key={name} component={RequiredTextareaInput} type={type} label={label} name={name} />
    });
  }

  onSubmit(values) {
    this.props.editPost(this.props.postID, values, () => {
      this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="tournament-form-container">
        <h2>Edit Post</h2>
        <form
          className="tournament-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          <div className="form-buttons">
            <SubmitButton />
            <CancelButton route={`/tournaments/${this.props.match.params.id}/forum`}/>
          </div>
        </form>
      </div>
    )
  }
}

//form validations
const validate = values => {
  const errors = {};

  //validate inputs
  _.each(FIELDS, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  return errors;
}

const mapStateToProps = (state, ownProps) => ({
  postID: ownProps.match.params.postID
})

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'PostEditForm',
  validate
})(connect(mapStateToProps, { editPost })(EditPostForm));
