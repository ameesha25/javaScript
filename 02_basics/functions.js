// function sayMyName(){ //here paranthesis refers syntex of the function 
//     console.log("A");
//     console.log("M");
//     console.log("E");
//     console.log("E");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }

// // sayMyName() // paranthesis mtlb function call horaha hai 

// function addTwoNumbers(number1, number2){ //here num1 and num2 are parameters ..jb function ki definition batate hai to use parameters kehte hai 
//     console.log(number1+number2) 
// }

// addTwoNumbers(3,4) //yaha jo function ke andr value pass krte hai use kehte hai arguments

function addTwoNumbers(number1,number2){
    let result=number1+number2
     return result
}
const result=addTwoNumbers(3,5)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Ameesha"));

function loginUserMessage(username="Aryan "){
    if(username===undefined){
        console.log("Please enter your username");
        return
    }
    return `${username}just loggedIn`
}
console.log(loginUserMessage("Ameesha "));
// console.log(loginUserMessage()); //agar kuch pass nahi kiya toh undefined with please enter your name aajaega