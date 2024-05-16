// hoisting : this refers to the condition when the function is called before it is initialized

//Note: When we hold any function inside any variable, and then if we try to implement hoisting then it will give an error

console.log(addOne(5));// This will get executed 

function addOne(num1){
  return num1 + 1;
}

console.log(addTwo(5));//This will give an error

const var1 = function addTwo(num2){
  return num2 + 1;
}