const user={
    username:"Ameesha",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username="Amiiii";
// user.welcomeMessage()
console.log(this); //output would be empty paranthesis:{}