import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

//components
import NavBar from './NavBar';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <NavBar />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
