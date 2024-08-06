function multipleBy5(num){
   
    return num*5;
}

multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score ){
    this.username= username 
    this.score = score
}

createUser.prototype.increment = function(){
    // jisne(this) bhi bulaya hai uska score increase kaar do 
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

// additional properties batane ka kaam karta hai new 
const chai = new createUser("user", 25)
const tea = createUser("tea", 250)

chai.printMe();

// see in hitesh github for more information about new 