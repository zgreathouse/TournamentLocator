import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#403f42'}}>
            <span style={{paddingLeft: '10px', fontSize: '20px'}}>Tournament Locator</span>
        </div>
      </nav>
    )
  }
}

export default NavBar;
