//loops: a block of code which is used to perform a specific task in a repetitive manner.

//simple for loop

for (let i = 1; i <= 10; i++) {
    console.log(i); 
}

//if statement inside for loop

const myBirthDate = 1;
const myBirthMonth = 4;
for (let i = 0; i < 31; i++) {
    if(i === myBirthDate)
        console.log(`Your Birth date is: ${i}`);
}

//for loop inside for loop
for (let i = 0; i < 31; i++) {
    for (let j = 0; j < 12; j++) {
        if (i === myBirthDate && j === myBirthMonth) {
            console.log(`Your Bithdate is ${i} and your month of birth is ${j}`);
        }
    } 
}

//for loop on array

const myArr = new Array("Krishn ji", "Ram ji", "Hanuman ji", "Bholenath ji")

for (let i = 0; i < myArr.length; i++) {
        console.log(`${myArr[i]} ki jai ho`);
}

//break: this keyword is used to terminate the loop on meeting some specific condition

//continue: this keyword is used to skip a particular condition
