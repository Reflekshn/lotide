// Assert function that takes in two values to compare and console.log's an appropriate message to the console
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to search for a key on an object where its value matches a given value
const findKeyByValue = function(objectToSearch, valueToSearch) {
  // String to hold the matching key
  let matchingObjectKey;

  // Iterate through object keys to find matching value
  for (const key in objectToSearch) {
    const element = objectToSearch[key];
    // Assign current key to matching key when value is found
    if (element === valueToSearch) {
      matchingObjectKey = key;
    }
  }
  return matchingObjectKey;
};


// Object to search
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Test conditions
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;