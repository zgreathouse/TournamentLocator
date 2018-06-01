//modules
import React from 'react';

//components
import FooterTop from './footerTop';
import FooterBottom from './footerBottom';

const Footer = () => {
  return (
    <div className="footer-container">      
      <footer>
        <FooterTop/>
        <FooterBottom/>
      </footer>
    </div>
  )
}

export default Footer;
