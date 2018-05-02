import _ from 'lodash';
import React from 'react';

//function takes array value and seperates elements by commas and spaces
export const convertToReadable = array => {
  if (array) {
    let newArray = array;

    newArray = newArray.map(item => {
      return item = " " + item;
    });

    let convertedArray = newArray.toString();
    return convertedArray
  }
}

//function which sets up requirement for certain fields to be separated by commas and spaces
export const requireCommas = (list) => {
  const listArray = list
    .split(",")
    .map(list => list.trim()); //remove all whitespace

  if (listArray.length === 1 && list.indexOf(" ") !== -1) {
    return `Please separate all items with commas`;
  }

  return;
}

//function which converts string separated by commas into an array of strings
export const convertListToArray = (list) => {
  const listArray = list
    .split(",")
    .map(list => list.trim()); //remove all whitespace

  return listArray;
}

//function which assists in rendering multiline text (tournament description & post body)
export const renderBody = (body) => {
  const splitBody = body.replace(/\n/ig, 'neverGunnaGiveYouUp').split('neverGunnaGiveYouUp');
  let i = 0;

  return _.map(splitBody, row => {
    i += 1;
    return <p key={i}>{`${row}`} <br/></p>
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
      values[value] = convertListToArray(values[value]);
    } else if (value === "startTime" || value === "endTime") {
      values[value] = convertToDateObject(values.date, values[value]);
    } else if (value === "maxEntrants" || value === "entryFee" || value === "venueFee" || value === "potBonus" || value === "travelRange") {
      values[value] = parseFloat(values[value], 10);
    }
  }

  const tournament = _.omit(values, ['date']);
  return tournament;
}
