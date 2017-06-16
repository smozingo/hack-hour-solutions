/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */


function romanNumeral(n) {

  // Create an array of translations
  var map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];

  // Create a return string for numerals
  var roma = '';

  // loop through the map, skipping by two
  for (var idx = 0; n > 0 && idx < map.length; idx += 2) {
    // loop until n has been decremented to a number less than our current map value
    while (n >= map[idx]) {
      // concat the current translation to the output string
      roma += map[idx + 1];
      // decrement n by the current map value
      n -= map[idx];
    }
  }

  // return our result!
  return roma;
}

console.log(romanNumeral(2017)); //MMXVII
console.log(romanNumeral(1066)); //MLXVI
console.log(romanNumeral(1999)); //MCMXCIX

module.exports = romanNumeral;
