// array => collection of multiple data items under a single variable

 const myArr = [0, 1, 2, 3, 4, 5, true, "Abhay"]

 const myheroes = new Array("Thor", "IronMan", "Captain America")

 //copying an existing array into another one creates a shallow copy i.e. changes made in the copied array will also get reflected into the original one

 //Array Methods
 console.log(myArr.length);

 console.log(myArr.push(6));//adds this element to the end

 console.log(myArr.pop());//removes the last element from the array

 console.log(myArr.reverse());

 console.log(myArr.includes(4));

 console.log(myArr.indexOf(3));

 const myArr2 = myArr.join()//This will convert the whole array into a string with elements separated by comma

 console.log(myArr2);0,1,2,3,4,5
 console.log(typeof myArr2);//string

 console.log(myArr.unshift(7));//adds this element to the start of this array. Since, implementing this function will force all the array elements to shift from their position, so computer gets loaded

 console.log(myArr.shift());//removes the first array element

 //Difference between slice() and splice()

 const myNewArr = [2, 5, 7, 4, 9]
 console.log("A", myNewArr);

const mySlice = myNewArr.slice(2,4)


console.log("A", myNewArr);

console.log(mySlice);
console.log("B", myNewArr);

const mysplice = myNewArr.splice(2,4)

console.log(mysplice);
console.log("C", myNewArr);

//The difference between slice() and Splice is that in slice() the second parameter does not get included while priting a portion of array and also it do not modifies the original array whereas in splice(), the data item corresponding to the second parameter gets printed and also it modifies the original array i.e. whichever elements we are including in splice() method will get removed from the original array


const marvel_heroes = ["Thor", "IronMan", "Hulk"]

const dc_heroes = ["flash", "AquaMan", "Batman", "Superman"]

marvel_heroes.push(dc_heroes);// this will add the entire dc_heroes array a single data-item to the end of the marvel_heroes array i.e. array withim array

console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes); //this will return a new array with all the combined data of both the arrays

console.log(allHeroes);

//another way of merging two or more arrays is by using spread operator(...)

const all_heroes = [...marvel_heroes, ...dc_heroes];//same output as concat

const arr1 = [2,3, 5, [4, 6], 7, [3, [5, 0, 9]]];

//If we want arr1 to get normalize as a single array without any nested arrays, then we can use flat() method

console.log(arr1.flat(Infinity))//here infinity is depth i.e. upto how much depth we want to flatten the array

//suppose we want to ask if the given element is an array

console.log(Array.isArray("Abhay"));

//If the above element is not an array, then for converting it into an array, we can use from() method with object 'Array'

console.log(Array.from("Abhay"));//element could be anything either string, array or numbers

//If an object is passed as an element in the above from() method, it will return an emty array bcoz it couldn't decide on which basis, array should be created like on the basis of keys or values.

console.log(Array.from({name: "Abhay"}));

//suppose we have numerous data and we want to create an array of that data, then it can also be done using of() method with object 'Array'

let data1 = 100;
let data2 = 200;
let data3 = 300;

console.log(Array.of(data1, data2, data3));