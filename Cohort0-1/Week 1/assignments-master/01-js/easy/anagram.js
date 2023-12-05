/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //Base Condition
if(str1.length!==str2.length){
  return false;
}
//Converting String to Lower case
 str1 = str1.toLowerCase()
 str2 = str2.toLowerCase()
 let char1 = str1.split("");
 let char2 = str2.split("");
 //Sorting both strings
 char1.sort();
 char2.sort();
  for(let i = 0; i<char1.length; i++){
    if(char1[i]!==char2[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
