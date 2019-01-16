//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both 
//forward and backward, ignoring punctuation, case, and spacing.

//number values are checked, but special characters and spaces are ignored. 

function palindrome(str) {
  //clean format
  let pattern = /[A-Za-z0-9]/ig;
  let rawArr = str.match(pattern);
  let clean = rawArr.join("");
  clean = clean.toLowerCase();

  //check if reverse string is same as normal string.  
  let rev = ""; 
  for (let i =clean.length -1; i > -1; --i){
    rev+=clean[i];
  }
  if(rev == clean){
  return true;
  }
  return false; 
}



console.log(palindrome("2_A3*3#A2")); //true 
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("five|\_/|four")); //false 
