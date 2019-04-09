function convertToRoman(num) {
 let str = '';
 let x = 0;  
 if (num > 1000){
    x = num / 1000;
 str = 'M'.repeat(x);
 num = num % 1000; 
 }
 console.log(num);
 if (num > 500){
    str = str+'D';
    num = num - 500; 
 } 
 console.log(num);
 if (num > 100){
    x = num / 100;
    str = str + 'C'.repeat(x);
    num = num % 100;  
 }
 console.log(num);
 if(num > 50){ 
     str = str + 'L';
     num = num - 50; 
 }
 console.log(num);
 if (num > 10){
     x = num / 10; 
     str = str + 'X'.repeat(x); 
 }
 console.log(str); 
 return str;
}

//convertToRoman(36);

convertToRoman(5789);
//-------------------------------------------------------

function convertToRoman(num) {
    let str='';
    let romanNum = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'], //ones
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'], //tens
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'] //hundreds
    ];
    str = str + 'M'.repeat(num/1000); 
    console.log(str);
    num = num % 1000; 
    console.log(num);

    num.toString(); 
 return num;
}

convertToRoman(36);
convertToRoman(5432); 

