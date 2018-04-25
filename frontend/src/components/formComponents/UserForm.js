import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { editUser } from '../../actions/userActions';
import { requireCommas } from '../../util/helperFunctions';
import { FIELDS, unrequiredFields } from '../../util/userFormFields';

//components
import TextInput from './formFields/textInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class UserForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      return <Field key={name} component={TextInput} type={type} label={label} name={name} />
    });
  }

  onSubmit(values) {
    // this.props.editUser(values, () => {
    //   this.props.history.push('/tournaments');
    // });
    console.log(values);
    console.log("submitted");
  }

  render() {
    const { handleSubmit, user } = this.props;

    if (!user){
      return <div></div>
    }

    return (
      <div className="tournament-form-container">
        <h2>User Form</h2>
        <form
          className="tournament-form"
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

  //require how list input values are formatted to be converted to arrays later
  errors.followedGames = requireCommas(values.followedGames || '');
  errors.followedSeries = requireCommas(values.followedSeries || '');

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
})(connect(mapStateToProps)(UserForm));
