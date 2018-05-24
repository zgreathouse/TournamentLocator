import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FIELDS, unrequiredFields } from '../../util/userFormFields';

//actions
import { editUser } from '../../actions/userActions';

//components
import TextInput from './formFields/textInput';
import NumberInput from './formFields/numberInput';
import ListInput from './formFields/listInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class UserForm extends Component {
  renderFields() {
    const { user } = this.props;

    return _.map(FIELDS, ({ label, name, type }) => {
      if (user.username && name === "username") {
        return <h3 className="username" key={name}>{user.username}</h3>
      }

      if (name === 'travelRange') {
        return <Field key={name} component={NumberInput} type={type} label={label} name={name} />

      } else if (name === 'followedGames') {
        return <Field key={name} component={ListInput} type={type} label={label} name={name} />
      }

      return <Field key={name} component={TextInput} type={type} label={label} name={name} />
    });
  }

  onSubmit(values) {
    this.props.editUser(values, () => {
      this.props.history.push(`/user/profile/${this.props.user._id}`);
    });
  }

  render() {
    const { handleSubmit, user } = this.props;

    if (!user){
      return <div></div>
    }

    return (
      <div className="user-form-container">
        <h2>User Form</h2>
        <form
          className="user-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          <div className="form-buttons">
            <SubmitButton />
            <CancelButton route={`/user/profile/${this.props.user._id}`}/>
          </div>
        </form>
      </div>
    )
  }
}

//form validations
const validate = values => {
  const errors = {};
  const requiredFields = _.omit(FIELDS, unrequiredFields);

  //validate inputs
  _.each(requiredFields, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  return errors;
}

const mapStateToProps = (state) => ({
  user: state.auth
})

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'UserForm',
  validate
})(connect(mapStateToProps, { editUser })(UserForm));
