import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const GamesAndTags = ({ tournament }) => {
  const { game, tags } = tournament;

  return (
    <div>
      <div>Game: {game}</div>
      <div>Tags: {convertToReadable(tags)}</div>
    </div>
  )
}

export default GamesAndTags;
