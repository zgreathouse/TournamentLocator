//modules
import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = ({ pClassName }) => {
  return (
    <div
      className="footer-copyright"
      style={{ backgroundColor: "#302e31", height: "16px"}}
    >
      <div className="container" style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <a className={pClassName} href="#!">Terms of Service</a>
        <p className={pClassName}>|</p>
        <Link className={pClassName} to="/">Home</Link>
        <p className={pClassName}>|</p>
        <a
          className={pClassName}
          href="https://termsfeed.com/privacy-policy/4de29e1606bd9145c9be0aece65a3cb8"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
