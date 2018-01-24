import React, { Component } from 'react';

//components
// import AuthModal from './auth/AuthModal';
import FacebookOAuthButton from './auth/FacebookOAuthButton';
import GoogleOAuthButton from './auth/GoogleOAuthButton';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#403f42'}}>
            <div
              className="left brand-logo"
              style={{paddingLeft: '10px', fontSize: '20px'}}
            >
              Tournament Locator
            </div>
            <ul className="right">
              <li><GoogleOAuthButton /></li>
              <li><FacebookOAuthButton /></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
