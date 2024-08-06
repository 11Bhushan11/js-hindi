//singleton(jum bhi hum literal ki tarah declared karte hai to singleton nahi banta) -apne tarah ka yek hi object hai 
// constructor si singleton banta hai 

//object literals (object ko declare karne ka tarika)

// Object.create             (constructor method)

const mySym = Symbol("key1")

const JsUser = {
    name : "Sunny",
    "full name" : "Sunny Bhushan",
    [mySym] : "mykey1",
    age : 18,
    location: "Jaipur", 
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email) 
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// // console.log(JsUser.mySym)
// console.log(JsUser["full name"])

// JsUser.email = "sunnybhushan72@gmail.com"
// Object.freeze(JsUser) 
// JsUser.email = "sunnybhushan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // same object ko reference karna hai to this use karenge 
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 