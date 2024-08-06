// primitive datatypes 

// 7 types : String, Number , Boolean , null, undefined, Symbol, BigInt 
// const bigNumber = 34353353232532532n;

// Reference (Non primitive)

// Array , Objects , Functions 

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name : "sunny" , 
    age : 22,
}

const myFunction = function() {
    console.log("hello world")
}

console.log(typeof bigNumber) //undefined

scoreValue = null;
console.log(typeof scoreValue)//object 

//*************************Memories ******* */

//Stack(Primitive) Memory-> iske ander defined hota hai to copy milta hai
 //, Heap(Non-Primitive) Memory -> reference(matlab jo bhi changes karte hai wo actual value ke ander karte hai) milta hai 


 let myYoutubename = "hiteshchoudharydotcom"

 let anothername = myYoutubename 
 anothername = "chaiorcode"

 console.log(myYoutubename)
 console.log(anothername)

 let user = {
    email: "user@google.com"
    upi : "user@ybl"
 }