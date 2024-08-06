// if

// = single equal = operator assignment ka hai 
// == equal 
// === type checking 

const isUserloggedIn = true;

// const score = 200 ;
// if (score > 200){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`)

const balance = 100
// if (balance > 500 ) console.log("test")

// if (balance < 500){
//    console.log("less than 500")
// }
// else if (balance < 750){
//     console.log("less than 750")
// }
// else if (balance < 900){
//     console.log("less than 900")
// }
// else {
//     console.log("greater than or equal to 900")
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false ;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==2 ){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}