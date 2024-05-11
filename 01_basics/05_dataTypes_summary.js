// There are two data types on the basis of how data is stored in the memory and how it is accessed.
/* 1. Primitive Data Types
=> String
=> Number
=> Boolean
=> Undefined
=> Null
=> Symbol (to make the data unique)
=> BigInt

2. Reference Type/ Non-Primitive Data Types
=> Arrays
=> Objects
=> Functions
*/

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//number
let myNumber = 3;
//null
const tempOutside = null;
//undefined
let electionResults;
//String
let myName = "Abhay";
//Boolean
let isLoggedIn = false;
//BigInt 
const bigNumber = 32324234234324n
//Symbol
const Id = Symbol('123');
//Array
let heroes = ["Superman", "Thor", "IronMan"];
//Object
let myData = {
    name : "Abhay",
    age : 23
}
//Function 
let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myNumber);

console.log(typeof tempOutside);

console.log(typeof electionResults);

console.log(typeof myName);

console.log(typeof isLoggedIn);

console.log(typeof bigNumber);

console.log(typeof Id);

console.log(typeof heroes);

console.log(typeof myData);

console.log(typeof myFunction);

let myId = Symbol('123');
let anotherId = Symbol('123');

console.log(myId);
console.log(anotherId);

//There are two types of memories in JS:
// 1. Stack (Primitive Data Types)
// 2. Heap (Non-Primitive Data Types)

// Note: Whenever any value assigned to any primitive data type is copied by any other primitive data type, then only a copy of the original data is assigned to it i.e. any changes done to the copy will not get reflected to the original data but for non-primitive data types, this scenario is vice-versa i.e. the original reference is assigned to the second variable.

//Example-
let dataOne = 345; 
let dataTwo = dataOne;//345
dataTwo = 456;

console.log(dataOne);//345
console.log(dataTwo);//456

let userOne = {
    userName : "Abhay Gupta",
    userEmail : "abhayg1804@gmail.com"
}

let userTwo = userOne;

userTwo.userEmail = "a33553@gmail.com";

console.log(userOne.userEmail);//a33553@gmail.com
console.log(userTwo.userEmail);//a33553@gmail.com

