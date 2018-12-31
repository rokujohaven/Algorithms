function truncateString(str, num) {
  // Clear out that junk in your trunk
  let word = str; 
  if (str.length > num){
  word = str.substring(0, num); 
  word+="..."; 
  }
  return word;
}

console.log(truncateString("Absolutely Longer", 2));
