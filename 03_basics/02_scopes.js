
// var c = 300
// curly brackets ko scope kahte hai {}
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log("inner: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "sunny"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "sunny"
    if (username === "sunny"){
        const website = " Youtube"
        console.log(username +website );
    }
    // console.log(website)
}

// console.log(username)

console.log(addone(5))
function addone(num){
    return num +1
}


const addTwo = function(num){
    return num+2
}
addTwo(5)