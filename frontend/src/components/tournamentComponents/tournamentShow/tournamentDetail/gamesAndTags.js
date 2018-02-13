import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const GamesAndTags = ({ tournament }) => {
  const { game, tags } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Game: {convertToReadable(game)}</div>
      <div>Tags: {convertToReadable(tags)}</div>
    </div>
  )
}

export default GamesAndTags;
