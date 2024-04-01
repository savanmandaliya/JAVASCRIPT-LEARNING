// nested if else

// winning number 19

// 19 your gusses is right 
// 17 too low
// 32 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number "); // + symbol because it's take string value
console.log(typeof userGuess,userGuess); //typeof userGuess is string

if(userGuess == winningNumber){
    console.log("your gusses is correct");
}else{
    if(userGuess < winningNumber){
    console.log("your gusses is too low");
}    else{
    console.log("too high");
}
}