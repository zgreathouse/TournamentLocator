import _ from 'lodash';

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

//function which takes date and time strings and creates a date object
export const convertToDateObject = (date, time) => {
  const newDate = `${date} ${time} UTC`;
  return new Date(newDate);
}

//function which extracts the time from a date object
export const extractTime = dateString => {
  let date = new Date(dateString);
  let timeString = date.toLocaleTimeString('en-US');
  return timeString.slice(0, 4) + timeString.slice(7);
}

//function which extracts the day, month, and year from a Date object
export const extractDate = dateString => {
  let date = new Date(dateString);
  return date.toLocaleString('en-US').slice(0,10);
}

//function which converts a form values object to be writable to our database
export const convertToDatabaseWritable = (values) => {
  for (let value in values) {
    if (value === "tags" || value === "sponsors") {
      values[value] = convertListToArray(values[value]);
    }

    if (value === "startTime" || value === "endTime") {
      values[value] = convertToDateObject(values.date, values[value]);
    }

    if (value === "maxEntrants" || value === "entryFee" || value === "venueFee" || value === "potBonus") {
      values[value] = parseFloat(values[value], 10);
    }

    //TODO convert description to serve up new lines properly
  }

  //the date value is ommitted because it is not a field in our tournament
  //schema and the date string was only needed in creating the startTime
  //and endTime date objects
  const tournament = _.omit(values, ['date']);
  return tournament;
}
