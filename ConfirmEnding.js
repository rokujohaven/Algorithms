function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //don't use .endswith()
  let target_len = target.length; 
  // console.log(target_len);
  // console.log(str.substring(str.length-target_len));
  if(str.substring(str.length-target_len) == target){
    return true;
  }
  else{
    return false;
  }
}
confirmEnding("Bastian", "an");
