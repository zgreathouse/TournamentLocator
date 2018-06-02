import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;

  let stream = streamLink ? <div><strong>Stream:</strong> {streamLink}</div> : <div></div>
  let twitter = twitterLink ? <div><strong>Twitter:</strong> {twitterLink}</div> : <div></div>

  return (
    <div>
      {stream}
      {twitter}
    </div>
  )
}

export default TournamentLinks;
