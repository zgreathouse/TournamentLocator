import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FIELDS } from '../../util/postFormFields';

//actions
import { createPost, editPost } from '../../actions/postActions';

//components
import TextInput from './formFields/textInput';
import TextareaInput2 from './formFields/textareaInput2';
import Errors from './formFields/errors';
import SubmitButton from './formButtons/submitButton';

class PostForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type, placeholder }) => {
      if (name === 'title') {
        return <Field key={name} component={TextInput}
          type={type} label={label} name={name}
        />
      }

      return (
        <div className="post-body-input" key={name}>
          <Field component={TextareaInput2}
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

    if (splitPath[splitPath.length - 1] === "edit") {
      this.props.editPost(this.props.match.params.id, values, () => {
        this.props.history.push(`/tournaments/${this.props.match.params.id}/forum`);
      });
    } else {
      this.props.createPost(this.props.postID);
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="post-form-container">
        <h2>Post Form</h2>
        <form
          className="post-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          <div className="post-form-button">
            <SubmitButton />
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
  postID: ""//ownProps.match.params.postID
})

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'PostNewForm',
  validate
})(connect(mapStateToProps, { createPost, editPost })(PostForm));
