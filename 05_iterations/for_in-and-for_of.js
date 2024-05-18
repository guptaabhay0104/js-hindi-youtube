//Array friendly loops
//1. for-in(preferred specifically for arrays and map)
//2. for-of(preferred specifically for objects)
//3. for-each

const myArr1 = ["Kirshn Ji", "Ram Ji", "Hanuman Ji", "Bholenath Ji"]

for (const god of myArr1) {
    console.log(`${god} Ki Jai Ho`);
}

//advantage of for-of loop is that we don't need to increment or decrement the iterator

const myStr = "Hey! Google"

for (const char of myStr) {
    if (char == " ") {
        continue
    }
    console.log(char)
}

//Map: 1. A data structure which is used to store the data in the form of key and value pair. 
//2. It maintains the order in which the data is inserted but objects do not.
//3. It only stores unique value but objects can store duplicate values.

//Storing Data in a Map
const myMap = new Map;

myMap.set("js","JavaScript")
myMap.set("cpp","C++")
myMap.set("py","Python")
myMap.set("java","Java")

//for-of loop on a map

// for (const val of myMap) {
//     console.log(val);//display an array for each key value pair
// }

//to display keys and values differently
for (const [keys, values] of myMap) {
    console.log(`${keys} : ${values}`);
}

//Note: for-of loop won't works on objects since they aren't iterable for it.

//for-in loop on object

const myObj = {
    "js" : "Javascript",
    "cpp" : "C++",
    "rb" : "Ruby",
}
for (const key in myObj) {
    console.log(key);//will only display key
}

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}

//for-in loop on arrays

for (const arr in myArr1) {
    console.log(myArr1[arr]);//this will display the values
}

for (const arr in myArr1) {
    console.log(arr)//this will return the index
}

//for-in loop on Map => It won't work as Map is not iterable for for-in loop.

//for-in loop on strings
for (const str in myStr) {
    console.log(myStr[str]);//same case as array
}

//for-each

myArr1.forEach(function (item) {
    console.log(item);//this will print all the values of an array
})

myArr1.forEach( (item, index, arr) => {
    console.log(item, index, arr);//this will print all the values , index and array
})

//for-each loop on array of objects

const myArr2 = [
    {
        language: "C++",
        extension: "cpp"
    }, 
    {
        language: "Javascript",
        extension: "js"
    },
    {
        language: "Ruby",
        extension: "rb"
    }
]

myArr2.forEach( (obj) => {
    console.log(obj.language, ':', obj.extension);
})