import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createTournament } from '../../../actions/tournamentActions';
import { requireCommas } from '../../../util/helperFunctions';
import {
  FIELDS,
  unrequiredFields
} from '../../../util/formFields';

//components
import TextInput from './formFields/textInput';
import DateInput from './formFields/dateInput';
import TimeInput from './formFields/timeInput';
import NumberInput from './formFields/numberInput';
import SeriesInput from './formFields/seriesInput';
// import TextareaInput from './formFields/textareaInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class TournamentForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      //render date input
      if (name === 'date') {
        return <Field key={name} component={DateInput} type={type} label={label} name={name} />
      }
      //render time inputs
      if (name === 'startTime' || name === 'endTime') {
        return <Field key={name} component={TimeInput} type={type} label={label} name={name} />
      }

      //render number inputs
      if (name === 'maxEntrants' || name === 'venueFee' || name === 'entryFee' || name === 'potBonus') {
        return <Field key={name} component={NumberInput} type={type} label={label} name={name} />
      }

      //render series radio button
      if (name === 'series') {
        return <Field key={name} component={SeriesInput} type={type} label={label} name={name} />
      }

      // if (name === 'description') {
      //   return <Field key={name} component={TextareaInput} type={type} label={label} name={name} />
      // }

      //render standard text inputes
      return <Field key={name} component={TextInput} type={type} label={label} name={name} />
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
          {this.renderFields()}
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
  const requiredFields = _.omit(FIELDS, unrequiredFields);

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
  fields: _.keys(FIELDS),
  form: 'TournamentNewForm',
  validate
})(
  connect(null, { createTournament })(TournamentForm)
);
