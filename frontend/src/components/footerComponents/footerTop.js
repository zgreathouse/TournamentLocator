//modules
import React from 'react';

const FooterTop = () => {
  return (
    <div className="row">
      <div className="col span-3-of-4 main-logo-big">

      </div>
      <div className="col span-1-of-4 social-links">
        <h3>Developers</h3>
        <p>
          <a
            href="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
            rel="noopener noreferrer"
            target="_blank"
          ><i className="fa fa-linkedin"></i></a>
          <a
            href="https://github.com/zgreathouse"
            rel="noopener noreferrer"
            target="_blank"
          ><i className="fa fa-github"></i></a>
          Zach Greathouse
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/stone-ryan-a5460095/"
            rel="noopener noreferrer"
            target="_blank"
          ><i className="fa fa-linkedin"></i></a>
          <a
            href="https://github.com/Stone-Ryan"
            rel="noopener noreferrer"
            target="_blank"
          ><i className="fa fa-github"></i></a>
          Stone Ryan
        </p>
      </div>
    </div>
  );
}

export default FooterTop;
