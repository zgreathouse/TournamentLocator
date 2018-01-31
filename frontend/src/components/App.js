//modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

//components
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
