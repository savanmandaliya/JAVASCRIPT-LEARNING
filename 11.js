// undefind 


let firstName;
console.log(firstName);

firstName ="savan"

console.log(typeof firstName,firstName);


// null

let myVariable = null;
console.log(myVariable);
console.log(myVariable,typeof myVariable); // bug ,error brcause it is given typeof null is object
myVariable = "savan"
console.log(myVariable);
console.log(typeof myVariable,myVariable);


// BigInt 

let myNumber = BigInt(1231287398163872373213);
let myBigInt = 1323n; // this is also big int number
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);