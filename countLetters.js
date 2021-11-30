// Assert function that takes in two values to compare and console.log's an appropriate message to the console
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Function to counter letters in a string
const countLetters = function(sentence) {
  // Convert the string to all lower case, remove spaces and store it as a new string
  let modifiedSentence = sentence.toLowerCase().split(" ").join("");

  // Object to store each letter found and how many instances of it occur in the string
  const results = {};

  // Loop through each character of the sentence
  for (const char of modifiedSentence) {
    // If the current letter exists as a property in the object then add 1 to the associtated counter
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  console.log(results);
  return results;
};

// Test conditions: store resulting object and then use assertEqauls to verify
assertEqual(countLetters("Lighthouse is in the house").h, 2);
assertEqual(countLetters("Lighthouse is in the house").h, 4);
assertEqual(countLetters("Lighthouse is in the house").o, 2);
assertEqual(countLetters("Lighthouse is in the house").e, 4);
assertEqual(countLetters("Lighthouse is in the house").e, 3);

module.exports = countLetters;