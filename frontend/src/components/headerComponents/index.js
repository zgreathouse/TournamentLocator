//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import AuthModal from './auth/AuthModal';
import UserProfileLink from './userProfileLink';

class Header extends Component {

  renderContent() {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return [
          <li key={1}><AuthModal modalType="Sign Up" /></li>,
          <li key={2}><AuthModal modalType="Login" /></li>
        ];
      default:
        return [
          <li key={3}><UserProfileLink userID={auth._id}/></li>,
          <li key={4}><a className="auth-button-logout" href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <header>
        <Link to="/tournaments" >
          <h2 className="main-logo">Tournament Locator</h2>
        </Link>
          <ul className="main-nav">
            {this.renderContent()}
          </ul>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header);
