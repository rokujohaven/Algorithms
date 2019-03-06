function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let strArr = str.split(/(?=[A-Z])\s*/);
  //console.log(strArr);
  strArr = strArr.map(x=>x.toLowerCase().match(/[a-z]+/g).join('-'));
  //console.log(strArr);
  str = strArr.join('-');
  //console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

