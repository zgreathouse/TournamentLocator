import React, { Component } from 'react';

//components
// import AuthModal from './auth/AuthModal';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#403f42'}}>
            <div style={{paddingLeft: '10px', fontSize: '20px'}}>
              Tournament Locator
            </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
