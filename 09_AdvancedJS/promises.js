//Creation of a Promise
//way-1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hey! I am Promise One.");
        resolve();//this we need to call then only the promise will get consumed by using the '.then' command
    },1000)
})

//Promise Consumed
promiseOne.then(function(){
    console.log("Promise One Executed");
})

// way-2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey! I am promise Two")
        resolve()
    }, 2000);
}).then(() => {
    console.log("Promise Two Executed")
})

//way-3
const promiseThree = new Promise((resolve, reject) => {
    let dbConnection = true;
    if(!dbConnection){
        resolve("Promise Three Executed")
    }else{
        reject("Error: Something went wrong")
    }
})
promiseThree.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})

//way-4
new Promise(function(resolve, reject){
    let dbConnection = false
    if(dbConnection){
        resolve({username : "ABHAY GUPTA", password: "Abhay@123"})
    }else{
        reject("Object not found")
    }
})
.then((user) => {
    console.log(user)
    return user.password//if then command is returning something then we cannot store that return into another variable, instead we have to handle this return statement with another '.then' command. This scenario is known as thenable.
}) 
.then((data) => {
    console.log(data)   
})
.catch((err) => {
    console.log(err)
})

way-5
comsuming a promise using async await function
async function handlingPromiseThree(){
   try {
    const response = await promiseThree
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}

handlingPromiseThree()//the problem with this async await function is that it couldn't handle errors directly. So, we have to wrap the statements in a try-catch block

fetching the records from an API using async await

async function fetchData(){
    try {
        const response = await fetch('https://api.github.com/users/guptaabhay0104')//this function accpets a promise
        const data = await response.json()//since response is string type so we need to convert it to json
        //here await is used because it takes time to convert the string data into json format
        console.log(data)
    } catch (error) {
        console.log("Something went wrong")
    }
}

fetchData()

//fetching the data from an API using .then
fetch('https://api.github.com/users/guptaabhay0104').then(function(response){
    const data = response.json()
    console.log(response)
    return data
})
.then((info) => {
    console.log(info)
}).catch(() => {
    console.log("Data not found");
}).finally(() => {
    console.log("Data is either found or not found.");//This will get printed in both the cases: .then and .catch
})