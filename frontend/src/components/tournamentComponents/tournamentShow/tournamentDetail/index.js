import React from 'react';

//components
import GamesAndTags from './gamesAndTags';
import SeriesIcon from './seriesIcon';
import TournamentLinks from './tournamentLinks';
import Sponsors from './sponsors';
import MaxEntrants from './maxEntrants';
import Fees from './fees';
import DateAndTime from './dateAndTime';
import VenueAddress from './venueAddress';
import Description from './description';

const TournamentDetail = ({ tournament }) => {
  return (
    <div style={{
      margin: "50px",
      padding: "20px"
    }}>
      <h5>{tournament.title}</h5>
      <GamesAndTags tournament={tournament} />
      <SeriesIcon tournament={tournament} />
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

export default TournamentDetail;
