// ********* Numbers *********

const score = 200;
const newScore = new Number(500);
const hundreds = 10000000000;
const percentage = 78.8989;

// Number Methods
console.log(newScore.toString());
console.log(newScore.toString().length);
console.log(hundreds.toLocaleString('en-IN'));//en-IN is used to put commas according to the indian currency
console.log(percentage.toFixed(2));
console.log(percentage.toPrecision(2));

// ********* Math *********
//Math object contains various methods and predefined values that can be useful in JS

console.log(Math.min(4,44,5,6,7));
console.log(Math.max(4,44,5,6,7));
console.log(Math.PI);
console.log(Math.floor(5.6));
console.log(Math.round(5.67));
console.log(Math.random());

//Suppose we are creating a game and we want to generate a random value each time between 1 and 6

const min_value = 1;
const max_value = 6;

//formula to generate random number between a given min value and max value

console.log(Math.floor(Math.random() * (max_value - min_value + 1) + min_value));