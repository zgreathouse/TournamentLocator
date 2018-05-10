import React from 'react';

const DeveloperLink = ({ name, linkedIn, github }) => {
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

export default DeveloperLink;

//name="Zach Greathouse"
//linkedIn="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
//github="https://github.com/zgreathouse"
