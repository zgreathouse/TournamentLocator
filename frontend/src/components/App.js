//modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

//components
import Header from './headerComponents';
import Footer from './footerComponents';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
