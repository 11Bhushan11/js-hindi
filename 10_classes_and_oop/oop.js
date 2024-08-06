const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details form database")
        // console.log(`username :${this.username}`)
        console.log(this);    
    }
}


// console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// constructor function 
// here new key word is constructor 
// const promiseOne = new Promise()
// const data = new Data()

function User(username , loginCount , isLoggedIn){
    // username = username
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userOne = new User("Hitesh", 12, true)
const userTwo = new User("ChaiAurCode",11, false )
console.log(userOne.constructor);
// console.log(userTwo); 

// 4 steps 
// new object created 
// constructor function call with new keyword  
//  this keyword injected  (arguments wahra inject ho jata hai )
//  mil jate hai function ke andar 



