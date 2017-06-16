/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

// create a function that accepts an array of digits, then
// invokes functions that return a mode and a mean of that array,
// then returns whether or not they're equivalent
function modemean(array) {
  // EDGE CASES
  // is it an array?
  if(!Array.isArray(array)) return `${array} is not an array`;
  // is the array populated?
  if(!Array.length) return 'array is empty';

  // invoke the functions and return the comparison of their results
  return mode(array) === mean(array);
}

// create a function that returns the mean of all numbers in the array
function mean(array) {
  // add all of the elements together
  const sum = array.reduce(function(total, el) {
    return total + el;
  });

  // divide by the number of elements and return the result
  return Math.floor(sum / array.length);
}

// create a function that returns the mode of all numbers in the array
function mode(array) {
  // create an object to store a count for each number
  const modes = {};
  // loop through the array and populate the modes object
  array.forEach(function(num) {
    if(num in modes) {
      return modes[num]++;
    }
    modes[num] = 1;
  });

  // max:  keep track of the most occurrences count
  let max = -Infinity;
  // mode: keep track of the largest value with the most occurrences
  let mode = -Infinity;

  // iterate through the possible modes
  for(let num in modes) {
    // if we have more of this one than any other, update max and set mode
    if (modes[num] > max) {
      max = modes[num];
      mode = num;
    } // if we have an equal number of this one and our max, update mode to whichever is larger
    else if (modes[num] === max && num > mode) {
      mode = num;
    }
  }

  // return the mode as an integer
  return Number(mode);
}

console.log(modemean([1,2,3,4,2]));       // true  (2 / 2)
console.log(modemean([1,2,3,4,2,100]));   // false (18 / 2)
console.log(modemean([-10,-20,-30,-20])); // true  (-20 / -20)

