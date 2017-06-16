/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  // create some variables to track:
  // - the sum of our current sub array
  let currentSum = -Infinity;
  // - and the maximum value we've found
  let maxSum = -Infinity;

  // loop through the array, looking for the set of contiguous numbers that result in the highest sum
  arr.forEach(el => {
    // calculate currentSum.  If we add the new value, does it increase our current sum?
    // if so, add it in, otherwise we've moved the start of our sub array
    currentSum = Math.max(el, currentSum + el);

    // if we've exceeded our previous max, update it with the new max
    maxSum = Math.max(maxSum, currentSum);
  })

  // We're done, huzzah!
  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))// 18 [3, 10, -4, 7, 2]
console.log(maxSubarray([15,20,-5,10]))               // 40 [15,20,-5,10]
console.log(maxSubarray([1,2,3,4,-3,4,-3]))           // 11 [1,2,3,4,-3,4]
console.log(maxSubarray([-1,2,3,4,-3,4,-3]))          // 10 [2,3,4,-3,4]

module.exports = maxSubarray;
