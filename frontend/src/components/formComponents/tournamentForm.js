import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { FIELDS, unrequiredFields } from '../../util/tournamentFormFields';

//actions
import { createTournament } from '../../actions/tournamentActions';

//components
import DateInput from './formFields/dateInput';
import TextareaInput from './formFields/textareaInput';
import TimeInput from './formFields/timeInput';
import NumberInput from './formFields/numberInput';
import TextInput from './formFields/textInput';
import ListInput from './formFields/listInput';
import SubmitButton from './formButtons/submitButton';

class TournamentForm extends Component {
  renderFields() {
    const timeInputs = ['startTime', 'endTime'];
    const numberInputs = ['maxEntrants', 'venueFee', 'entryFee', 'potBonus'];
    const textInputs = ['title', 'game', 'city', 'streetAddress', 'streamLink', 'twitterLink'];
    const listInputs = ['tags', 'sponsors'];

    return _.map(FIELDS, ({ label, name, type }) => {
      if (textInputs.indexOf(name) !== -1) {
        return <Field key={name} component={TextInput} type={type} label={label} name={name} />

      } else if (listInputs.indexOf(name) !== -1) {
        return <Field key={name} component={ListInput} type={type} label={label} name={name} />

      } else if (name === 'date') {
        return <Field key={name} component={DateInput} type={type} label={label} name={name} />

      } else if (timeInputs.indexOf(name) !== -1) {
        return <Field key={name} component={TimeInput} type={type} label={label} name={name} />

      } else if (numberInputs.indexOf(name) !== -1) {
        return <Field key={name} component={NumberInput} type={type} label={label} name={name} />

      } else if (name === 'description') {
        return <Field key={name} component={TextareaInput} type={type} label={label} name={name} />
      }
    });
  }

  onCancel() {
    if (window.confirm("Leaving this page before submitting will result in losing all progress made on this form. Are you sure you would like to cancel? ")) {
      this.props.history.push('/tournaments');
    }
  }

  onSubmit(values) {
    this.props.createTournament(values, () => {
      this.props.history.push('/tournaments');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="tournament-form-container">
        <h2>Tournament Form</h2>
        <form
          className="tournament-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          <div className="form-buttons">
            <SubmitButton />
            <button className="cancel-button" onClick={this.onCancel.bind(this)}>Cancel</button>
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

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'TournamentNewForm',
  validate
})(connect(null, { createTournament })(TournamentForm));
