import React from 'react';

const customStyles = {
  marginRight      : "5px",
  textAlign   : "center",
  color: "#2bbbad",

}

const Footer = (props) => {


  return (
    <footer
      className="page-footer"
      style={{
        backgroundColor   : "#403f42",
        position          : "relative",
        bottom            : "0",
        boxShadow         : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col s3 offset-s9">
            <p className="grey-text text-lighten-4" style={{fontSize: "18px"}}>Developers</p>
            <p className="grey-text text-lighten-4" style={{minWidth: "150px"}}>
              <a
                href="https://www.linkedin.com/in/zachary-greathouse-11345813b/"
                style={customStyles}
              ><i className="fa fa-linkedin"></i></a>
              <a
                href="https://github.com/zgreathouse"
                style={customStyles}
              ><i className="fa fa-github"></i></a>
              Zach Greathouse
            </p>
            <p className="grey-text text-lighten-4" style={{minWidth: "150px"}}>
              <a
                href="https://www.linkedin.com/in/stone-ryan-a5460095/"
                style={customStyles}
              ><i className="fa fa-linkedin"></i></a>
              <a
                href="https://github.com/Stone-Ryan"
                style={customStyles}
              ><i className="fa fa-github"></i></a>
              Stone Ryan
            </p>
          </div>
        </div>
      </div>
      <div
        className="footer-copyright"
        style={{ backgroundColor: "#302e31", height: "16px"}}
      >
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}>
          <a className="grey-text text-lighten-4" href="#!">Terms of Service</a>
          <p className="grey-text text-lighten-4">|</p>
          <a className="grey-text text-lighten-4" href="/">Home</a>
          <p className="grey-text text-lighten-4">|</p>
          <a
            className="grey-text text-lighten-4"
            href="https://termsfeed.com/privacy-policy/4de29e1606bd9145c9be0aece65a3cb8"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
