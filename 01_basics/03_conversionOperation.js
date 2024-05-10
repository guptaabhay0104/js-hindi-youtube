let number = 33;
let value = "33abc"
let stringNumber = String(number)

let numberValue = Number(value)

console.log(typeof(numberValue));

console.log(numberValue);

//33abc -> type is number but value is NaN

console.log(stringNumber);

console.log(typeof(stringNumber));

//33 -> type is string and value is 33

/* Similarly, we can convert 1 into boolean value. For that the output will be as follows:

1 -> true; 0 -> false;
"" -> false
"Abhay" -> true

*/
