import React from 'react';
import { Link } from 'react-router-dom';

const CancelButton = (props) => {
  return (
    <div>
      <Link className="cancel-button" to="/tournaments">Cancel</Link>
    </div>
  )
}

export default CancelButton;
