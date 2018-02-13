import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;
  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Stream: {streamLink}</div>
      <div>Twitter: {twitterLink}</div>
    </div>
  )
}

export default TournamentLinks;
