import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;
  return (
    <div>
      <div>Stream: {streamLink}</div>
      <div>Twitter: {twitterLink}</div>
    </div>
  )
}

export default TournamentLinks;
