//Immediately Invoked Function expression

// When we want to write execute some code right after the execution of our program and when we want to eliminate the problem of the global variable's pollution, we use IIFE 

//Example: If we want our program to connect to the database immediately after its execution

//()() the first parenthesis is to wrap us the function (or arrow function) inside it and the second one is for the function calling

(function dbConnection(){
    console.log(`DB Connected`);
  })();
  
  //******** OR *******
  
  (() => {
    console.log(`DB connected again`);
  })();//Here we will notice, the arrow function will show an error because the first iife is currently executing so the compiler can't decide where to stop the execution. To do so, just add ';' after the first function calling
  
  //suppose we want to pass an arguement inside the iife
  
  ((name) => {
    console.log(`DB connected for the third time, ${name}`)
  })('Abhay');
  