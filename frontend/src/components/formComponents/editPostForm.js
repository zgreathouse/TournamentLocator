import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { editPost } from '../../actions/postActions';
import { FIELDS } from '../../util/postFormFields';

//components
import TextInput from './formFields/textInput';
import RequiredTextareaInput from './formFields/requiredTextareaInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';
// import DeleteButton from './formButtons/deleteButton';

class EditPostForm extends Component {
  renderFields() {
    //TODO need to figure out how to set initial values on a Field
    return _.map(FIELDS, ({ label, name, type }) => {
      if (name === 'title') {
        return <Field key={name} component={TextInput} type={type} label={label} name={name} />
      } else if (name === 'body') {
        return <Field key={name} component={RequiredTextareaInput} type={type} label={label} name={name} />
      }
    });
  }

  //TODO
  // set up a selectedPost to grab post data during a component will mount
  // set up the handle initialize function below and run function in a componentWillMount

  // componentWillMount() {
  //   this.handleInitialize();
  // }


  // handleInitialize() {
  //   const initialData = {
  //     "title": this.props.currentPost.title,
  //     "body": this.props.currentPost.body
  //   };
  //
  //   this.props.initialize(initialData);
  // }

  // onSubmit(values) {
  //   //TODO change this to logic for editing an existing post on submit
  //   this.props.editPost(this.props.match.params.id, values, () => {
  //     this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
  //   });
  // }

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

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'PostEditForm',
  validate
})(connect(null /*, { editPost }*/)(EditPostForm));
