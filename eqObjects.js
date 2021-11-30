// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Boolean value to return based on whether the objects match or not
  let doObjectsMatch = false;

  // Arrays to hold key values for each object
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // If the objects do not have the same number of keys return false
  if (object1Keys.length !== object2Keys.length) {
    return doObjectsMatch;
  }

  // Iterate over each set of keys comparing the values
  for (const key of object1Keys) {
    // If we are dealing with array values, compare them using eqArrays()
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the arrays do not match return false
      if (!eqArrays(object1[key], object2[key])) {
        return doObjectsMatch;
      }
    } else {
      // Assume we are dealing with primitives and compare them
      if (object1[key] !== object2[key]) {
        return doObjectsMatch;
      }
    }
  }
  // Assign true to our boolean flag and return it as all conditons have passed
  doObjectsMatch = true;
  return doObjectsMatch;
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

// Primitive Value Test Conditions
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

// Array value Test Conditions
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;