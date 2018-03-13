import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createTournament } from '../../../actions/tournamentActions';
import { requireCommas } from '../../../util/helperFunctions';
import { FIELDS, unrequiredFields } from '../../../util/formFields';

//components
import DateInput from './formFields/dateInput';
import TextareaInput from './formFields/textareaInput';
import TimeInput from './formFields/timeInput';
import NumberInput from './formFields/numberInput';
import TextInput from './formFields/textInput';
import SubmitButton from './formButtons/submitButton';
import CancelButton from './formButtons/cancelButton';

class TournamentForm extends Component {
  componentWillUnmount() {
    this.props.history.push(`/tournaments/${this.props.newTournament._id}`);
  }

  renderFields() {
    const timeInputs = ['startTime', 'endTime'];
    const numberInputs = ['maxEntrants', 'venueFee', 'entryFee', 'potBonus'];
    const textInputs = ['title', 'game', 'tags', 'venueAddress', 'sponsors', 'streamLink', 'twitterLink'];

    return _.map(FIELDS, ({ label, name, type }) => {
      if (textInputs.indexOf(name) !== -1) {
        return <Field key={name} component={TextInput} type={type} label={label} name={name} />

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

  onSubmit(values) {
    // const { newTournament, createTournament } = this.props;
    // console.log(newTournament);
    // createTournament(values).then(console.log(newTournament));
      // .then(this.props.history.push(`/`));

    this.props.createTournament(values, () => {
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
          style={{margin: "100px 40px"}}
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

  //require how list input values are formatted to be converted to arrays later
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

const mapStateToProps = (state) => ({
  newTournament: state.tournaments.selectedTournament
});

export default reduxForm({
  fields: _.keys(FIELDS),
  form: 'TournamentNewForm',
  validate
})(connect(mapStateToProps, { createTournament })(TournamentForm));