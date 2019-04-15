function telephoneCheck(str) {
  // Good luck!
  let str1 = str.match(/\d+/gi);
  console.log(str1);
  return true;
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555"); 
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555"); 
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555"); 
telephoneCheck("1 555 555 5555"); 
telephoneCheck("1 456 789 4444"); 
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)"); 
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382"); 
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");

//console.log("555-555-5555".match(/\d+/g))

/*
"555-555-5555"
"1 555-555-5555"
"1 (555) 555-5555"
"5555555555"
"555-555-5555"
"(555)555-5555"
"1(555)555-5555"
"555-5555"
"5555555"
"1 555)555-5555" 
"1 555 555 5555"
"1 456 789 4444" 
"123**&!!asdf#"
"55555555"
"(6054756961)"
"2 (757) 622-7382"
"0 (757) 622-7382"
"-1 (757) 622-7382"
"2 757 622-7382"
"10 (757) 622-7382"
"27576227382"
"(275)76227382"
"2(757)6227382" 
"2(757)622-7382"
"555)-555-5555"
"(555-555-5555"
"(555)5(55?)-5555"
*/