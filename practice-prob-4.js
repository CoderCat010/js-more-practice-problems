//=== WE CAN GET ELEMENTS IN AN ARRAY IN ADVANCE WAY USING BY JS METHODS.
/****
    * 1. Using Square Brackets ([])
    * 2. Using the at() Method
    * 3. Using Array Destructuring
    * 4. Using the find() Method
    * 5. Using Array Index
****/


//=== WE CAN SET AND FIND ELEMENTS IN AN ARRAY IN ADVANCE WAY USING BY JS METHODS.
/****
* 1. Using Direct Assignment
* 2. Using splice Method
* 3. Using slice and concat Methods
* 4. Using map Method
* 5. Using fill Method
* 6. Using a Loop
****/

//=======ARRAY

//?::::ARRAY INDEX, GET AND SET BY INDEX, INDEXOF IN SIMPLE WAY OR DIRECT ASSAIGNMENT::::

//!------INDEX

//::get element by index 
let arr = [55, 66, 77, 88, 99];
let getElement = arr[1]

// console.log(getElement);

/* //another way
console.log(arr[1]); */


//!::set element by index 
let arr = [55, 66, 77, 88, 99];
let setElement = 33;
arr[2] = setElement;

// console.log(arr);

// another way
arr[2] = 33;
//console.log(arr);

/* // another way
console.log(arr[2] = 44);
console.log(arr); */


//!-------INEDXOF
let arr = [55, 66, 77, 88, 99];
let findElement = arr.indexOf(88);

// console.log(findElement);
/* // another way
console.log(arr.indexOf(88)); */


//!====ARRAY METHODS FOR ADDING OR REMOVING ELEMENTS

//push()
//::::add new element from last::::
var arr = [33, 444, 55, 88]
arr.push(99);

// console.log(arr); 

// unshift()
//::::add new element from last::::
var arr = [33, 444, 55, 88];
arr.unshift(99);

// console.log(arr);

// splice
//::::add new element from the middle::::
var arr = [33, 444, 55, 88];
arr.splice(2, 0, 666);

// console.log(arr);


//pop()
//::::remove element from last::::
var arr = [33, 444, 55, 88];
arr.pop(88);

// console.log(arr);

//shift()
//::::remove element from first::::
var arr = [33, 444, 55, 88];
arr.shift(33);

// console.log(arr);

//slice
//::::remove specific elements from an array::::
var arr = [33, 444, 55, 88];
arr = arr.slice(1, 2);

// console.log(arr);

//splice
//::::remove element from the middle::::
var arr = [33, 444, 55, 88];
arr.splice(1, 1);

// console.log(arr);
// we can remove and at the same time we can add also a new element
var arr = [33, 444, 55, 88];
arr.splice(1, 1, 10);

// console.log(arr);





