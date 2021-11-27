// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
const assertArraysEqual = function(actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// Function to compare to arrays and return true if identical, otherwise false
const eqArrays = function(list1, list2) {

  // First check that arrays have the same number of elements
  if (list1.length === list2.length) {
    // Iterate through each array using the same index and see if they are equal
    for (let i = 0; i < list1.length && i < list2.length; i++) {
      if (list1[i] !== list2[i]) {
        return false;
      }
    }
  } else {
    // Return false if they are not the same length
    return false;
  }
  
  return true;
};

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

// Test conditions
// Passes
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);

// Fails
assertArraysEqual(middle([1]), [3, 4, 5]);
assertArraysEqual(middle([1, 2]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [1]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]);
assertArraysEqual(middle([1, 2, 3, 4]), [1, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 9]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [8, 4]);