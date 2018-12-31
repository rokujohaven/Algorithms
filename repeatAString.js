function repeatStringNumTimes(str, num) {
  //without using repeat()
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
