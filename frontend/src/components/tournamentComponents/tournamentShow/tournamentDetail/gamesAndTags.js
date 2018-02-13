import React from 'react';

const convertToReadable = array => {
  if (array) {
    let newArray = array;

    newArray = newArray.map(item => {
      return item = " " + item;
    });

    let convertedArray = newArray.toString();
    return convertedArray
  }
}

const GamesAndTags = ({ tournament }) => {
  const { game, tags } = tournament;

  return (
    <div style={{
      margin: "15px",
      padding: "10px",
      border: "solid black 1px",
      boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
    }}>
      <div>Game: {convertToReadable(game)}</div>
      <div>Tags: {convertToReadable(tags)}</div>
    </div>
  )
}

export default GamesAndTags;