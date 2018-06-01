import React from 'react';

const DeveloperLinks = ({ name, linkedIn, github }) => {
  return (
    <p>
      <a
        href={linkedIn}
        rel="noopener noreferrer"
        target="_blank"
      ><i className="fa fa-linkedin"></i></a>
      <a
        href={github}
        rel="noopener noreferrer"
        target="_blank"
      ><i className="fa fa-github"></i></a>
      {name}
    </p>
  )
}

export default DeveloperLinks;
