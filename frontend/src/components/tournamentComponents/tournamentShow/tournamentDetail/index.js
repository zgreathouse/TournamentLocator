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
    <div className="tournament-detail-container">
      <div className="tournament-detail-header">
        <h2>{tournament.title}</h2>
        {tournament.seriesStartTime ? <i className="fa fa-trophy"></i> : <i></i>}
      </div>

      <div className="tournament-detail">
        <GamesAndTags tournament={tournament} />
        <SeriesIcon tournament={tournament} />
        <TournamentLinks tournament={tournament} />
        <Sponsors tournament={tournament} />
        <MaxEntrants tournament={tournament} />
        <Fees tournament={tournament}/>
        <DateAndTime tournament={tournament}/>
        <VenueAddress tournament={tournament} />
      </div>
      <Description tournament={tournament}/>
    </div>
  )
}

export default TournamentDetail;
