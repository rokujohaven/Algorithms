//Return true if the given string is a palindrome. Otherwise, return false.
//A palindrome is a word or sentence that's spelled the same way both 
//forward and backward, ignoring punctuation, case, and spacing.

//number values are checked, but special characters and spaces are ignored. 

//Method 1: Brute force
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

//Method 2: Front and back comparison
function palindrome(str) {
  // This solution is most efficient since it does not need to check the whole string even once. Good for long strings. 
  //it just finds 2 letters that don't match and returns not a palindrome

  //make front and back indexes 
  let front = 0; 
  let back = str.length - 1; 

  //catch all non word characters and ignores them from the front and the back. 
  while(back > front){

    //ignoring special characters and spacing from front and back. 
    if (str[front].match(/[\W_]/)){
    front++;
    continue; 
    }
    if(str[back].match(/[\W_]/)){
    back--;
    continue; 
    }
    
    //at this point, front and back should both index an alphanumeric char
    //convert to lower case and compare
    if(str[front].toLowerCase() !== str[back].toLowerCase()){
      return false; 
    }
    //if both front and back alphanumeric chars match, proceed to next 
    front++;
    back--;

  }
  
  return true;
}

console.log(palindrome("almostomla")); //false
console.log(palindrome("2_A3*3#A2")); //true 
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("five|\_/|four")); //false 
