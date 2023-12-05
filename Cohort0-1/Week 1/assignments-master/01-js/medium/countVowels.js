/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  //Converting String to Lower case
  str.toLowerCase();
  //Converting String to an array
  let char = str.split("");
  //Initializing count to zero
  let count = 0;
  //Base Condition
  if(str.length()===0){
    return 0;
  }
  //checking for each element;
    for(let i=0;i<char.length;i++){
      if(char[i]=='a'||char[i]=='e'||char[i]=='i'||char[i]=='o'||char[i]=='u'){
        count ++;
      }
      
    }
    //return result
    return count;
}

module.exports = countVowels;