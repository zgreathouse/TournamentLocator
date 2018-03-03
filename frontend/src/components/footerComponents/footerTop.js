//modules
import React from 'react';

const customStyles = {
  marginRight      : "5px",
  textAlign   : "center",
  color: "#2bbbad"
}

const FooterTop = ({ pClassName, iClassName1, iClassName2}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s3 offset-s9">
          <p className={pClassName} style={{fontSize: "18px"}}>Developers</p>
          <p className={pClassName} style={{minWidth: "150px"}}>
            <a
              href="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
              style={customStyles}
              rel="noopener noreferrer"
              target="_blank"
            ><i className={iClassName1}></i></a>
            <a
              href="https://github.com/zgreathouse"
              style={customStyles}
              rel="noopener noreferrer"
              target="_blank"
            ><i className={iClassName2}></i></a>
            Zach Greathouse
          </p>
          <p className={pClassName} style={{minWidth: "150px"}}>
            <a
              href="https://www.linkedin.com/in/stone-ryan-a5460095/"
              style={customStyles}
              rel="noopener noreferrer"
              target="_blank"
            ><i className={iClassName1}></i></a>
            <a
              href="https://github.com/Stone-Ryan"
              style={customStyles}
              rel="noopener noreferrer"
              target="_blank"
            ><i className={iClassName2}></i></a>
            Stone Ryan
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
