// Array filtering allows you to create a new array with elements that pass a specific condition.

const ages = [12, 18, 25, 8, 30, 16];

// Task 1: Use the .filter() method to create a new array called `adultAges` which only
// includes ages that are 18 or older. Use console.log to print the `adultAges` array.

const adulutAges = ages.filter((num) => {
  return num >= 18;
});
console.log("adulutAges", adulutAges);

// Task 2: Write a function called `getAdultAges` that takes an array of ages as an argument
// and returns a new array with only the adult ages.

// Task 3: Use the `getAdultAges` function to create a new array called `adultAges`.
