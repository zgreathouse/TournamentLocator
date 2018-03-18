//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <li key={3}><a href="/api/logout">Logout</a></li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div>
            <div>
              <Link to="/" >Tournament Locator</Link>
            </div>
            <ul>
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
