//modules
import React from 'react';

//components
import FooterTop from './footerTop';
import FooterBottom from './footerBottom';

const Footer = () => {
  return (
    <footer
      className="page-footer"
      style={{
        backgroundColor   : "#403f42",
        bottom            : "0",
        boxShadow         : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}
    >
      <FooterTop pClassName="grey-text text-lighten-4" iClassName1="fa fa-linkedin" iClassName2="fa fa-github" />
      <FooterBottom pClassName="grey-text text-lighten-4" />
    </footer>
  )
}

export default Footer;
