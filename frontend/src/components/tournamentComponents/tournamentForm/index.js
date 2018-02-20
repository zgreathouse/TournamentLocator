import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createTournament } from '../../../actions/tournamentActions';
import { requireCommas } from '../../../util/helperFunctions';
import {
  FORM_TEXT_INPUTS,
  FORM_DATE_INPUT,
  FORM_TIME_INPUTS,
  unrequiredFields
} from '../../../util/formFields';

//components
import TextInput from './formFields/textInput';
import DateInput from './formFields/dateInput';
import TimeInput from './formFields/timeInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class TournamentForm extends Component {
  renderFormTextInputs() {
    return _.map(FORM_TEXT_INPUTS, ({ label, name, type }) => {
      return (
        <Field key={name} component={TextInput} type={type} label={label} name={name} />
      );
    });
  }

  renderFormDateInput() {
    const { label, name, type } = FORM_DATE_INPUT;
    return (
      <Field key={name} component={DateInput} type={type} label={label} name={name} />
    );
  }

  renderFormTimeInputs() {
    return _.map(FORM_TIME_INPUTS, ({ label, name, type }) => {
      return (
        <Field key={name} component={TimeInput} type={type} label={label} name={name} />
      );
    });
  }

  onSubmit(values) {
    this.props.createTournament(values, () => {
      //TODO current going to the dashboard, will adjust to go to the new tournament's show page
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h5 className="brand-logo center" style={{margin: "30px"}}>Tournament Form</h5>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          style={{margin: "50px 40px 100px 40px"}}
        >
          {this.renderFormTextInputs()}
          {this.renderFormDateInput()}
          {this.renderFormTimeInputs()}
          <SubmitButton />
          <CancelButton />
        </form>
      </div>
    )
  }
}

//form validations
const validate = values => {
  const errors = {};
  const requiredFields = _.omit(FORM_TEXT_INPUTS, unrequiredFields);

  errors.tags = requireCommas(values.tags || '');
  errors.sponsors = requireCommas(values.sponsors || '');

  //validate inputs
  _.each(requiredFields, ({name, errorMessage}) => {
    if (!values[name]) {
      errors[name] = `Please enter ${errorMessage}.`;
    }
  });

  return errors;
}

export default reduxForm({
  fields: _.keys(FORM_TEXT_INPUTS),
  form: 'TournamentNewForm',
  validate
})(
  connect(null, { createTournament })(TournamentForm)
);
