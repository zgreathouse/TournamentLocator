import _ from 'lodash';
import React from 'react';
import uuidv4 from 'uuid/v4';

//function takes array value and seperates elements by commas and spaces
export const convertToReadable = array => {
  if (array) {
    let newArray = array;

    newArray = array.map(item => {
      return " " + item;
    });

    return newArray.toString();
  }

  return array.toString();


}

//function which assists in rendering multiline text (tournament description & post body)
export const renderBody = (body) => {
  const splitBody = body
    .replace(/\n/ig, 'neverGunna000GiveYouUp')
    .split('neverGunna000GiveYouUp');

  return _.map(splitBody, row => {
    return <p key={uuidv4()}>{`${row}`} <br/></p>
  });
}

//function which takes date and time strings and creates a date object
export const convertToDateObject = (date, time) => {
  const newDate = `${date} ${time}`;
  return new Date(newDate);
}

//function which extracts the time from a date object
export const extractTime = dateString => {
  let date = new Date(dateString);
  let timeString = date.toLocaleTimeString('PST');
  return `${timeString.slice(0, 4)}${timeString.slice(7)}`;
}

//function which extracts the day, month, and year from a Date object
export const extractDate = dateString => {
  let date = new Date(dateString).toLocaleString('en-US').split(",");
  let newDate = new Date().toLocaleString('en-US').split(",");

  if (date[0].slice(-2) !== newDate[0].slice(-2)) {
    //date with year included
    return `${date[0].slice(0, -4)}${date[0].slice(-2)}` ;
  }
  //date without the year included
  return date[0].slice(0, -5);
}

//function which converts a form values object to be writable to our database
export const convertToDatabaseWritable = (values) => {
  for (let value in values) {

    if (value === "tags" || value === "sponsors" || value === "favoriteGames") {
      values[value] = values[value].split(",");

    } else if (value === "startTime" || value === "endTime") {
      values[value] = convertToDateObject(values.date, values[value]);

    } else if (value === "maxEntrants" || value === "entryFee" || value === "venueFee" || value === "potBonus" || value === "travelRange") {
      values[value] = parseFloat(values[value], 10);
    }
  }

  const tournament = _.omit(values, ['date']);
  return tournament;
}
