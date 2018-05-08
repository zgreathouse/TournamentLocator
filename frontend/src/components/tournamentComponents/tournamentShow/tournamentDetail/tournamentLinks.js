import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;

  let stream = streamLink ? <div>Stream: {streamLink}</div> : <div></div>
  let twitter = twitterLink ? <div>Twitter: {twitterLink}</div> : <div></div>

  return (
    <div>
      {stream}
      {twitter}
    </div>
  )
}

export default TournamentLinks;
