//return to dashboard
import React from 'react';
import { Link } from 'react-router-dom';

const CancelButton = (props) => {
  return (
    <Link to="/" className="btn right" style={{marginRight: "50px"}}>
      Cancel
    </Link>
  )
}

export default CancelButton;
