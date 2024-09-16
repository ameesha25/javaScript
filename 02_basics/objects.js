//object literals
const mySym=Symbol("key1");


const JsUser={
    name:"Hitesh",
    [mySym]: "mykey1" ,
    age:18,
    location:"jaipur",
    email:"amisha@google.com",
    isLoggedIn:false,
    LastLogin:["monday","saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);


// JsUser.email="ameesha@chatgpt.com";
// Object.freeze(JsUser)
// JsUser.email="ameesha@microsoft.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");

}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user ,${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
