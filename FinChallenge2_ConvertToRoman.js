function convertToRoman(num) {
    let str='';
    let romanNum = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'], //ones
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'], //tens
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'] //hundreds
    ];
    //get how many thousands are in the number. since M is the largest roman numeral  
    str = str + 'M'.repeat(num/1000); 
    //num is the 3 digit remainder of the original number 
    num = num % 1000; 
    //console.log(num);

    if(num != 0){
        let n = num.toString(); 

        let digit = 0; 
        //going through the romanNum array, from hundreds to tens and then ones 
        for(let i = n.length - 1; i > -1; --i){

        if(n[digit] == 0){ //restart loop at the next digit, since 0th place has no specific roman numeral      representation  
            digit++;
            continue;
        }
        //otherwise, look thru the romanNum array 
            str = str + romanNum[i][parseInt(n[digit])-1];
            digit++;
        }
    }
    //preview the romanNum before returning it 
    console.log(str);
 return str;
}

convertToRoman(5432); 
convertToRoman(2);
convertToRoman(501);
convertToRoman(9);
