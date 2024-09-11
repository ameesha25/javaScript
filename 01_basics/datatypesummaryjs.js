//primitive and non primitive 

//primitive 
//7 types of datatype
// string, boolean, number,null,undefined,symbol,bigInt 



// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;

const id= Symbol("123")
const anotherId=Symbol("123")
// console.log(id=== anotherId); //false

// const bigNumber=763875874864n

//reference non primitive 
// Array,objects,functions

const heros=["Shaktiman","nagraj","doga"];

let myObj={
    name:"Ameesha",
    age:"21"
}

const myFumction=function(){
    console.log("Hello world ");
}

// console.log(typeof bigNumber) //undefined

//stack and heap

// stack is primitive and heap is non-primitive

let myYoutubename="hiteshchoudharydotcom"
let anothername=myYoutubename
anothername="chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne={
    email :"amishabaghe@gmail.com",
    upi:"user@ybl"

}
let userTwo=userOne;
userTwo.email="ameesha@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

