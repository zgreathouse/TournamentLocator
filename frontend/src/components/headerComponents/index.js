//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import AuthModal from './auth/AuthModal';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key={1}><AuthModal modalType="Sign Up" /></li>,
          <li key={2}><AuthModal modalType="Login" /></li>
        ];
      default:
        return (
          <li key={3}><a href="/api/logout" style={{ marginRight: "10px"}}>Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav style={{width: "100%", minWidth: "100%"}}>
        <div className="nav-wrapper" style={{ backgroundColor: "#403f42"}}>
            <div
              className="left brand-logo"
              style={{marginLeft: "30px", fontSize: "20px", minWidth: "600px"}}
            >
              <a href="/" >Tournament Locator</a>
            </div>
            <ul className="right">
              {this.renderContent()}
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
