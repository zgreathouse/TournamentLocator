import React, { Component } from 'react';

//components
import GamesAndTags from './gamesAndTags';
import TournamentLinks from './tournamentLinks';
import Sponsors from './sponsors';
import MaxEntrants from './maxEntrants';
import Fees from './fees';
import DateAndTime from './dateAndTime';
import VenueAddress from './venueAddress';
import Description from './description';

class TournamentDetail extends Component {
  render() {
    const tournament = this.props.tournament;

    return (
      <div style={{
        margin: "40px",
        padding: "20px",
        border: "solid black 1px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>
        <h5>{tournament.title}</h5>
        <GamesAndTags tournament={tournament} />
        <TournamentLinks tournament={tournament} />
        <Sponsors tournament={tournament} />
        <MaxEntrants tournament={tournament} />
        <Fees tournament={tournament}/>
        <DateAndTime tournament={tournament}/>
        <VenueAddress tournament={tournament} />
        <Description tournament={tournament}/>
      </div>
    )
  }
}

export default TournamentDetail;
