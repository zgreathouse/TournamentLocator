import React from 'react';
import { Link } from 'react-router-dom';

const CancelButton = ({ route }) => {
  return (
    <div>
      <Link className="cancel-button" to={`${route}`}>
        Cancel
      </Link>
    </div>
  )
}

export default CancelButton;
