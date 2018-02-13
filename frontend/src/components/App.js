import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

//components
import Header from './headerComponents';
import Footer from './footerComponents';
import TournamentIndex from './tournamentComponents/TournamentIndex';
import TournamentShow from './tournamentComponents/tournamentShow';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" style={{
          backgroundColor: "#FFF",
          boxShadow : "0 0 10px 0 grey, 0 0 10px 0 grey"
        }}>
          <Header />
          <Route exact path="/" component={TournamentIndex} />
          <Route path="/tournaments/:id" component={TournamentShow} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
