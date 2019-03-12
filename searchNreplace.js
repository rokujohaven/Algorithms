//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

//using basic loops
function myReplaceLoop(str, before, after) {
  let arr = str.split(/\s/); 
  console.log(arr);
  for(let i = 0; i < arr.length; ++i){
    if(arr[i] == before){
      arr[i] = after; 
    }
  }
  str = arr.join(" ");
  return str; 
}

//using map
function myReplace(str, before, after) {
  let arr = str.split(/\s/); 
  arr = arr.map(x => {if(x == before){x = after} return x})
  str = arr.join(" ");
  console.log(str);
  return str; 
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
