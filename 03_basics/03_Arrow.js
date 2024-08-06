const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        // jab bhi current context(is scope ke ander jitne bhi variable hai usme this use kar sakte hai) ko refer karna hai to this keyword ka use karenge 
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
} 

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sunny"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "sunny"
//     console.log(this.username)
// }
const chai = () => {
    let username = "sunny"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 +num2;
// }
// const addTwo = (num1, num2) =>  num1 +num2;
// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username: "sunny"})


console.log(addTwo(3,4))

// const myArray = [2,3,4,5,6]
// myArray.forEach(function() {})
// myArray.forEach()