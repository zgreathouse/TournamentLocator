import React from 'react';

const DescriptionSection = ({ text }) => {
  return (
    <div className='section-text-description'>
      <p className='section-text' style={{marginLeft: '10px'}}>
          Here you may provide information about the rule set, other games or side events, <br/>
          any pros that may be attending, or any additional information that you would like to share! <br/>
      </p>
    </div>
  )
}

export default DescriptionSection;
