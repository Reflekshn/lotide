// Function that will return an array with only the middle element(s) of the provided array
const middle = function(array) {
  // Empty array that will hold the middle values
  let arrayMiddleValues = [];
  let middleValue1;
  let middleValue2;

  // Return an empty array if there are less than 3 elements
  if (array.length < 3) {
    return arrayMiddleValues;
  } else if (array.length % 2) {   // Array with an odd number of elements returns the middle value
    middleValue1 = Math.floor(array.length / 2);
    middleValue2 = -(Math.floor(array.length / 2));
    arrayMiddleValues = array.slice(middleValue1, middleValue2);
    return arrayMiddleValues;
  } else {    // Array with an even number of elements returns the two middle values
    middleValue1 = array.length / 2 - 1;
    middleValue2 = -(array.length / 2 - 1);
    arrayMiddleValues = array.slice(middleValue1, middleValue2);
    return arrayMiddleValues;
  }
};

module.exports = middle;