import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
// import AuthModal from './auth/AuthModal';
import FacebookOAuthButton from './auth/FacebookOAuthButton';
import GoogleOAuthButton from './auth/GoogleOAuthButton';

class NavBar extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key={1}><GoogleOAuthButton /></li>,
          <li key={2}><FacebookOAuthButton /></li>
        ];
      default:
        return (
          <li key={3}><a href="/api/logout">Logout</a></li>
        );
    }
  }

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

export default connect(mapStateToProps)(NavBar);
