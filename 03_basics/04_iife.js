// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife 
    console.log(`DB CONNECTED`);
}) ();

// chai()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh')

// javascript is single thread

// Javascript Execution context 
// global Execution context(ye allocate hota this ke andar) 
// function Execution context 
// eval execution context 

// two phase me javascript code run hota hai 
// memory creation phase 
// execution phase 


// exection phases 
// 1. global execution (ye this ke andar allocate hoga)
// 2. momory phase 
// 3. execution phase 



