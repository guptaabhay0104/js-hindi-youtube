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


//Object declaration as constructor

const tinderUser = new Object();

tinderUser.id = '123abc';
tinderUser.name = 'Abhay Gupta';
tinderUser.email = "abhayg19804@gmail.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//object within object

const newUser = {
  name : "Rishabh",
  email : "rishu@gmail.com",
  fullName : {
    userFullName : {
      firstName : "Rishabh",
      lastName : "Gupta"
    }
  }
}

console.log(newUser.fullName.userFullName.lastName);

newUser.fullName.userFullName.lastName = "Jain";

console.log(newUser.fullName.userFullName.lastName);

//combining the values of two or more object

const obj1 = {
  1 : 'a',
  2 : 'b'
}

const obj2 = {
  3 : 'a',
  4 : 'b'
}

//way1

const obj3 = {obj1, obj2};//This will store these two objects as values inside obj3
console.log(obj3);

//way2

const obj4 = Object.assign({}, obj1, obj2)// Here, {} is considered as the source object inside which both these objects' values will combine
console.log(obj4);

//way3

const obj5 = {...obj1, ...obj2}//using spread operator
console.log(obj5);

//object methods

console.log(Object.keys(tinderUser));// returns an array of keys
console.log(Object.values(tinderUser));//returns an array of values
console.log(Object.entries(tinderUser));//return an array within array containing keys and values as data items of the nested array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checking whether a property exists within an object or not
// array of objects

const objArr = [
  {
    name : "Sachin",
    age: 40
  },

  {
    name : "Abhishek",
    age: 23,
    email : "abhi123@google.com"
  }
]

//fetching or modifying the details

console.log(objArr[1].email);


//When we are frequenty fetching some data from any object, everytime we need to write obj_name.data_name, to make it simpler we can do object de structuring

const Course = {
    name : "MERN",
    fees : "35,000 INR",
    courseDuration : "6 months"
  }
  
  console.log(Course.courseDuration);//This full statement is too lengthy to write everytime we want to fetch the course duration
  
  const {courseDuration} = Course;
  const {courseDuration : duration} = Course;//duration here is aliasig name
  
  console.log(courseDuration);
  console.log(duration);
  
  