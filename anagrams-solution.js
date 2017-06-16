/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */
const chalk = require('chalk');

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
var result = anagrams('123');
console.log("RESULT:", result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// - Permutations are about defining possibilities of swapping elements of a given collection
// - Our code should establish a single Truth that is absolute for each branch of possibilities
// - Each branch should then create a new truth for each element of the remaining possibilities, then
//   create a new branch for each element in the remaining collection of possibilities
// - That Truth is then passed to children of that branch, defining the rules for all their descendants
function anagrams(string) {
    // Sets are collections of unique values
    var uniqPerms = new Set();

    function getPermutations(possibilities, myPermutation, call = 1) {
      console.log(chalk.bold.red(`[${call}] at top possibilities:${possibilities} myPermutation:${myPermutation}`));
      // if we've gone through the whole list of possibilities, we've got a permutation
      if (possibilities.length === 0) {
        console.log(chalk.green(`[${call}] Base Case: [${myPermutation}]`));
        return myPermutation;
      } else {
        // create an array that stores the newest permutation, plus that of all children
        var permutationList = [];
        // the length of the possibilities will diminish as we get closer to a permutation
        for (var i = 0; i < possibilities.length; i++) {
          // here's where we grab the possibilities for this branch
          var pre = possibilities.substring(0, i);
          var post = possibilities.substring(i + 1);

          // recursion time!
          // - myPermutation is the Truth for the next level and is made up of the Truth we were passed plus the possibility at i
          // - possibilities are made up of the remaining values to the left and right of the possibility at i
          // - concatenate the result into the list of permutations
          console.log(`[${call}] for loop i:${i} pre:${pre} newTruth:${possibilities[i]} post:${post} possibilities:${possibilities}`);
          permutationList = permutationList.concat(getPermutations(pre + post, myPermutation + possibilities[i], call + 1));
        }
        // once we've reached our base case, return the list of permutations
        console.log(`[${call}] returning permutationList:|${permutationList}|`);
        return permutationList;
      }
    }

    // kick off and loop through the resulting array, adding each element to the set to ensure uniqueness
    getPermutations(string, "").forEach(result => uniqPerms.add(result));

    // return the result as an array
    return Array.from(uniqPerms);

}

module.exports = anagrams;
