import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createTournament } from '../../../actions/tournamentActions';
import { FIELDS, unrequiredFields } from '../../../util/formFields';

//components
import FormField from './formField';
import SubmitButton from './submitButton';
import CancelButton from './cancelButton';

class TournamentForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      return (
        <Field key={name} component={FormField} type={type} label={label} name={name} />
      );
    })
  }

  onSubmit(values) {
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
          style={{margin: "50px 0 80px 0"}}
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
