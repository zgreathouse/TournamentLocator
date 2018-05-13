import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { FIELDS,
  PRIMARY_FIELDS,
  LOCATION_FIELDS,
  SOCIAL_FIELDS,
  TIME_FIELDS,
  FEES_FIELDS,
  unrequiredFields
} from '../../util/tournamentFormFields';

//actions
import { editTournament } from '../../actions/tournamentActions';

//components
import PrimaryDetails from './tournamentForm/primaryDetails';
import Location from './tournamentForm/location';
import Social from './tournamentForm/social';
import Time from './tournamentForm/time';
import Fees from './tournamentForm/fees';
import TextareaInput from './formFields/textareaInput';
import SubmitButton from './formButtons/submitButton';


class EditTournamentForm extends Component {
  onCancel() {
    if (window.confirm("Leaving this page before submitting will result in losing all progress made on this form. Are you sure you would like to cancel? ")) {
      this.props.history.push('/tournaments');
    }
  }

  onSubmit(values) {
    this.props.editTournament(this.props.match.params.id, values, () => {
      this.props.history.push(`/tournaments/${this.props.match.params.id}`);
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
          <PrimaryDetails />
          <Location />
          <Social />
          <Time />
          <Fees />
          <section>
            <Field key='description' component={TextareaInput} type='input' label='Description' name='description' />
          </section>
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
})(connect(null, { editTournament })(EditTournamentForm));
