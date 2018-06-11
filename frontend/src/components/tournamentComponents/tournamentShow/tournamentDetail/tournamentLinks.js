import React from 'react';

const TournamentLinks = ({ tournament }) => {
  const { streamLink, twitterLink } = tournament;

  if (!streamLink && !twitterLink) {
    return <div></div>
  }

  let stream = streamLink ? <div><strong>Stream:</strong> {streamLink}</div> : <div></div>
  let twitter = twitterLink ? <div><strong>Twitter:</strong> {twitterLink}</div> : <div></div>

  return (
    <section>
      {stream}
      {twitter}
    </section>
  )
}

export default TournamentLinks;
