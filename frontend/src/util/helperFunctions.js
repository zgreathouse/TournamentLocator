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
};

//function which converts string separated by commas and spaces into an array of strings
