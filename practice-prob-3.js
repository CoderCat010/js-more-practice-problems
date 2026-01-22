//=======PARSEFLOAT, PARSEINT, TOFIXED

// PARSEFLOAT (it returns any kind of string to number, and returns texts ad NaN)
var num1 = '5.3';
var result = parseFloat(num1)

// console.log(result);

var num1 = '5.3abc';
var result = parseFloat(num1)

// console.log(result); 

var num1 = 'abc';
var result = parseFloat(num1)

// console.log(result); 


//=======PARSEINT (it returns floating strings to an integer)
var num1 = '10.5';
var result = parseInt(num1)

// console.log(result); 

var num1 = 'abc';
var result = parseInt(num1)

// console.log(result); 


//=======ToFixed (it returns many places we want to take after decimal in case of decimal number or how many numbers we want to keep)
var num1 = 10.3444343;
var result = num1.toFixed(3)

// console.log(result); 

var num1 = 10.444343;
var result = num1.toFixed()

// console.log(result); 

var num1 = 10.444343;
var result = num1.toFixed(10)

// console.log(result); 
