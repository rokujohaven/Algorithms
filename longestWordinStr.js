//Return the length of the longest word in the provided sentence.
//Your response should be a number.
//Resource used: https://stackoverflow.com/questions/1044105/how-do-you-get-the-length-of-a-string

function findLongestWordLength(str) {
 let words = str.split(" ");
 let longestWord = 0;
 for (let i = 0; i < words.length; ++i){
   if (words[i].length > longestWord){
     longestWord = words[i].length;
   }
 }
 return longestWord;
}

//test
findLongestWordLength("The quick brown fox jumped over the lazy dog");
