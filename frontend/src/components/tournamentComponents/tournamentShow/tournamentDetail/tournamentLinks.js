import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;
  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      border: "1px solid #403f42"
    }}>
      <div>Stream: {streamLink}</div>
      <div>Twitter: {twitterLink}</div>
    </div>
  )
}

export default TournamentLinks;
