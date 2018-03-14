import React from 'react';
import { convertToReadable } from "../../../../util/helperFunctions";

const GamesAndTags = ({ tournament }) => {
  const { game, tags } = tournament;

  return (
    <div style={{
        margin: "15px",
        padding: "10px",
        border: "1px solid #403f42"
    }}>
      <div>Game: {game}</div>
      <div>Tags: {convertToReadable(tags)}</div>
    </div>
  )
}

export default GamesAndTags;
