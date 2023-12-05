/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters using a regular expression
  const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string and compare it with the original
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the cleaned string is equal to its reversed form
  return cleanStr === reversedStr;
}
module.exports = isPalindrome;
