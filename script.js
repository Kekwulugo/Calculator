// calculator functions

function add (a,b){
 return a + b;
}

function subtract (a,b){
 return a - b;
}

function multiply (a,b){
 return a * b;
}

function divide (a,b){
 return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate (firstNumber, operator, secondNumber) {
 if (operator == "+"){
  add(firstNumber,secondNumber);
 } else if( operator == "-"){
  subtract(firstNumber,secondNumber);
 } else if (operator == "*"){
  multiply(firstNumber, secondNumber);
 } else {
  divide (firstNumber, secondNumber);
 }
}

function getValue (event){
 let value = event.target.value;
 console.log(value);

}

let buttonsEl = document.querySelectorAll("button");

buttonsEl.forEach( button => button.addEventListener("click", getValue));



let equalBtn = document.querySelector("#equal");




