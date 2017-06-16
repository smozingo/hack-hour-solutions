/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  // verify that it is a binary string
  if(! /^[01]+$/.test(binary)) return 'Please pass in a binary string';

  // arrayify the string and spin it around
  // so we can work from the least significant digit
  const binArray = binary.split('').reverse();
  let answer = 0;

  // loop through the array
  for (let i = 0; i < binArray.length; i++) {
    // add the appropriate value according to the position
    // if the bit is turned on
    if (binArray[i] === '1'){
      answer += Math.pow(2,i);
    }
  }

  // we're done!
  return answer;
}

console.log(binToDec('')); //-> err
console.log(binToDec('210')); //-> err
console.log(binToDec('0')); //-> 0
console.log(binToDec('11')); //-> 3
console.log(binToDec('100')); //-> 4
console.log(binToDec('0101')); //-> 5
console.log(binToDec('101010101')); //-> 341
console.log(binToDec('1010011100')); //-> 668


module.exports = binToDec;
