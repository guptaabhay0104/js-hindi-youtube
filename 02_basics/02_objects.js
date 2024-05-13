// objects in JS

//object declaration could be done in two ways:
//1. as a constructor (singleton: single instance)

//2. as a literal (many instances can be created)

//object literal

let mySym = Symbol("key1")

const jsUser = {
    name: "Abhay",
    age:
    23,
    email: "abhayg1804@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"],//array is passed a value
    [mySym]: "myKey1"
}
    //whenever we pass a symbol as a key, always enclose it within square brackets otherwise it would be considered as a normal string


//fetching the object details
console.log(jsUser.name);//way1
console.log(jsUser["email"]);//way2: pass the key as string while fetching using square brackets

console.log(jsUser[mySym]);

//modifying the details of an object

jsUser.name = "Abhay Gupta"

console.log(jsUser.name);

//If you do not want the modifications of the object to be done by someone, just use freeze() method

//Object.freeze(jsUser)

//passing function as a value in an object

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//'this' keyword refers to the current object
}

console.log(jsUser.greeting());

console.log(jsUser.greetingsTwo());

