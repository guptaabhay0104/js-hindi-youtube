//'this' keyword refers to the current context

const obj1 = {
    username : "Abhay",
    age : 23,
  
    //using function as a value inside an object
    welcome : function(){
      `${this.username}, welcome to my website`;
      console.log(this);//this will return the object with all the current values
    }
  }
  
  console.log(obj1.welcome());
  obj1.username = "Abhishek";//value is modified here so the above this keyword will now display the object with the current values
  console.log(obj1.welcome());
  
  //Using 'this' keyword inside the function
  
  function myfunc(userName){
    console.log(this.userName);//this statement will return undefined bcoz we cannot use this keyword inside a function
  }
  
  myfunc("Abhay")
  //If we write only this inside a function then it will return the global object
  
  //arraw function : just remove the function keyword, add one arrow after the parenthesis and if you want, you can hold the function inside a variable
  
  const myfunc2 = (user_name) => {
    console.log(this);//return an empty string
  }
  
  myfunc2("Abhay Gupta");//undefined bcoz 'this' won't work ith arrow functions also.
  
  //Declaration of arrow function if it contains only one line inside it
  
  const addTwoNumbers = (num1, num2) => num1 +num2;//no need to write return keyword if we don't include curly braces
  
  console.log(addTwoNumbers(2, 8))
  
  //******** OR ********
  
  const addThreeNumbers = (n1, n2, n3) => (n1 + n2 + n3);//parenthesis is preferred bcoz if we try to pass any object then we have to include {} but arrow function will consider {} as the starting point of function, so we will require the return keyword
  
  console.log(addThreeNumbers(4, 6, 8))
  
  const objFunc = () => ({obj1});
  
  console.log(objFunc);