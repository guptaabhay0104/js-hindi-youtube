console.log("2" > 0); //true
console.log("02" > 0); // true
console.log("02" >= 2);//true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false

// The fact in the above statments is that "==" and other comparison operators work differently. They convert the first operand as number and then perform the comparison.

//=== compares the operators' value and also their data type.

//such conversion don't give a consistent result...so avoid such types of conversions.