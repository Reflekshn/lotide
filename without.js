// Implement without() which will return a subset of a given array, removing unwanted elements
const without = function(sourceArray, itemsToRemove) {
  let parsedArray = []; // Empty array to store parsed sourceArray
  let itemToRemoveMatch; // Flag to track if there is an item to remove match

  // Iterate through sourceArray
  for (const element of sourceArray) {
    itemToRemoveMatch = false;
    // Iterate through itemsToRemove and compare values against sourceArray element
    for (const item of itemsToRemove) {
      // If values match switch remove flag to true
      if (element === item) {
        itemToRemoveMatch = true;
      }
    }
    // If remove flag is false push the current element into the parsedArray
    if (!itemToRemoveMatch) {
      parsedArray.push(element);
    }
  }
  // Return the new parsedArray with the values requested to be removed
  return parsedArray;
};

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

// Test conditions
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 1, 1, 3], [1]), [3]);

// Ensure the original array does not get modified
const originalArray = [1, 2, 2, 4, 4, 5, 6];
let modifiedArray = without(originalArray, [2, 4]);
assertArraysEqual(originalArray, modifiedArray);

// Test the modified array against expected results
const expectedArray = [1, 5, 6];
assertArraysEqual(modifiedArray, expectedArray);