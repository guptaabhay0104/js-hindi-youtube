let myDate = new Date();

console.log(myDate);

//some Date methods
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

//ways to declare date on our own

let currentDate1 = new Date(2023, 6, 9)//yyyy-mm-dd

let currentDate2 = new Date(2023, 7, 23, 6, 9, 34)//yyyy-mm-dd hh-mm-ss

let currentDate3 = new Date("02-23-2024")//mm-dd-yyyy

console.log(currentDate1.toLocaleString);

console.log(currentDate2.toLocaleString);

console.log(currentDate3.toLocaleString);

console.log(currentDate1.toISOString());

console.log(currentDate1.toJSON());

//date is of 'object' type
