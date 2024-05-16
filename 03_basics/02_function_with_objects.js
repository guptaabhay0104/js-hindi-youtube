//rest operator: It is used to create an array of all the values passed in the function. Representation is same as the spread operator(...). The difference between the two lies in the use case.

function calculateCartValue(...product_price){
    return product_price;
  }
  
  console.log(calculateCartValue(100, 40, 5000, 450));//[100, 40, 5000, 450 ]
  
  //passing an array as an arguement in the function
  
  const myArr = [40, 65, 78]
  
  function arrFunc(getArr){
    return getArr[2];
  }
  
  console.log(arrFunc(myArr));
  //or we can pass the whole array
  console.log(arrFunc([40, 65, 78]));
  
  //passing an object as an arguement in the function
  
  const obj1 = {
    product_name : "Shampoo",
    price : 299
  
  }
  
  function objFunc(getObj){
    return `Product name is ${getObj.product_name} and its price is ${getObj.price}`
  }
  
  console.log(objFunc(obj1));
  //or we can pass whole object as an arguement
  console.log(objFunc({
    product_name : "Dishwasher",
    price : 200
  }));  