import React from 'react';

//components
import DeveloperLinks from './developerLinks';

const FooterTop = () => {
  return (
    <div className="row">
      <div className="col span-3-of-4 main-logo-big"></div>
      <div className="col span-1-of-4 social-links">
        <h3>Developers</h3>
        <DeveloperLinks
          name="Zach Greathouse"
          linkedIn="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
          github="https://github.com/zgreathouse"
        />
        <DeveloperLinks
          name="Stone Ryan"
          linkedIn="https://www.linkedin.com/in/stone-ryan-a5460095/"
          github="https://github.com/Stone-Ryan"
        />
      </div>
    </div>
  );
}

export default FooterTop;
