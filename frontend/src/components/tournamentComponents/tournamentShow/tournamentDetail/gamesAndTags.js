import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const GamesAndTags = ({ tournament }) => {
  const { game, tags } = tournament;
  let tagsList = <div></div>;

  if (tags && tags.length > 0) {
    tagsList = <div><strong>Tags:</strong> {convertToReadable(tags)}</div>;
  }

  return (
    <div>
      <div><strong>Game:</strong> {game}</div>
      {tagsList}
    </div>
  )
}

export default GamesAndTags;
