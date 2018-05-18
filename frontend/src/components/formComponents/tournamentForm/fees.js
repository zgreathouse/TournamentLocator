import React from 'react';
import { Field } from 'redux-form';
import { FEES_FIELDS } from '../../../util/tournamentFormFields';

//components
import NumberInput from '../formFields/numberInput';

const Fees = () => {
  const { venueFee, entryFee, potBonus } = FEES_FIELDS;

  return (
    <section>
      <h3>Fees</h3>
      <div className="fields-group">
        <Field key={venueFee.name}
          component={NumberInput}
          type={venueFee.type}
          label={venueFee.label}
          name={venueFee.name}
        />
        <Field key={entryFee.name}
          component={NumberInput}
          type={entryFee.type}
          label={entryFee.label}
          name={entryFee.name}
        />
        <Field key={potBonus.name}
          component={NumberInput}
          type={potBonus.type}
          label={potBonus.label}
          name={potBonus.name}
        />
      </div>
    </section>
  )
}

export default Fees;
