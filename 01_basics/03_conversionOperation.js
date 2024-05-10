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

// *************** operations ***************

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2+ 2); //122
console.log(1 + 2+ "2"); //32

//In case of more than two operands, the output will be displayed in type of the first operand.
