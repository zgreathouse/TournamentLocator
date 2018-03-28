import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

//components
import Header from './headerComponents';
import Footer from './footerComponents';
import TournamentIndex from './tournamentComponents/TournamentIndex';
import TournamentShow from './tournamentComponents/tournamentShow';
import TournamentForm from './tournamentComponents/tournamentForm';
import Forum from './forumComponents';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/tournaments/new" component={TournamentForm} />
            <Route exact path="/tournaments/:id" component={TournamentShow} />
            <Route exact path="/tournaments/:id/forum" component={Forum} />
            <Route exact path="/tournaments" component={TournamentIndex} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
