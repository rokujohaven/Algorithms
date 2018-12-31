function repeatStringNumTimes(str, num) {
  // repeat after me
  let word="";
  if(num < 0){
    return word;
  }
  else{
  for(let i = 0; i < num; i++){
    word+=str;
  }
  return word;
  }
}

console.log(repeatStringNumTimes("abc", 2));
