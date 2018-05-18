import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FIELDS } from '../../util/postFormFields';

//actions
import { createPost, editPost } from '../../actions/postActions';

//components
import TextInput from './formFields/textInput';
import TextareaInput from './formFields/textareaInput';
import Errors from './formFields/errors';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class PostForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type, placeholder }) => {
      if (name === 'title') {
        return <Field key={name} component={TextInput}
          type={type} label={label} name={name}
        />
      }

      return (
        <div key={name}>
          <Field component={TextareaInput}
            type={type} label={label} name={name} placeholder={placeholder}
          />
          <Field component={Errors}
            type={type} label={label} name={name} placeholder={placeholder}
          />
        </div>
      )
    });
  }

  onSubmit(values) {
    let splitPath = this.props.match.path.split("/");

    if (splitPath[splitPath.length - 1] === "new") {
      this.props.createPost(this.props.match.params.id, values, () => {
        this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
      });
    } else {
      this.props.editPost(this.props.postID, values, () => {
        this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="tournament-form-container">
        <h2>Post Form</h2>
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
  form: 'PostNewForm',
  validate
})(connect(mapStateToProps, { createPost, editPost })(PostForm));
