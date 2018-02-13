//modules
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchTournaments } from '../actions/tournamentActions';

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
        <div className="container">
          <Header />
          <Route exact path="/" component={TournamentIndex} />
          <Route path="/tournaments/:id" component={TournamentShow} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchTournaments }
)(App);
