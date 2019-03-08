//Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.
//Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {

  if (['a','e','i','o','u'].includes(str[0])){
        str = str + 'way';
  }
  else{
    let first = str.match(/[^aeiou]+/).join("");
    str = str.substring(first.length) + first + 'ay';
  }
  console.log(str);
  return str;
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
