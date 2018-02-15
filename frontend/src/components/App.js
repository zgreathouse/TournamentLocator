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
          <Switch>
            <Route path="/tournaments/new" component={TournamentForm} />
            <Route path="/tournaments/:id" component={TournamentShow} />
            <Route path="/" component={TournamentIndex} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
