let buttonsEl = document.querySelectorAll("button");
let displayEl = document.querySelector(".display");
let calculator = document.querySelector(".container");

// calculator functions

function add (a,b){
 return  Math.round((a + b)*10000)/10000;
}

function subtract (a,b){
 return Math.round((a - b)*10000)/10000;
}

function multiply (a,b){
 return a * b;
}

function divide (a,b){
 if(b === 0){
  return "No can do :("
 } 
   return Math.round((a / b)*10000)/10000;
 }

 
function percent (a){
 return a/100;
}

let firstNumber;
let secondNumber = 2;
let operator;




function operate (firstNumber, operator, secondNumber) {
 console.log(operator);
 if (operator === "+"){
  displayEl.textContent = add(parseFloat(firstNumber),parseFloat(secondNumber));
 } else if( operator === "-"){
  displayEl.textContent = subtract(parseFloat(firstNumber),parseFloat(secondNumber));
 } else if (operator === "*"){
  displayEl.textContent = multiply(parseFloat(firstNumber),parseFloat(secondNumber));
 } else if(operator === "/") {
  displayEl.textContent = divide(parseFloat(firstNumber),parseFloat(secondNumber));
 } else {
  displayEl.textContent = percent(parseFloat(firstNumber));
 }
}



 

buttonsEl.forEach( button => button.addEventListener("click", ()=> {
 
 const displayNumber = displayEl.textContent;
 const key = button.value;
 const buttonClass = button.className;

 if(buttonClass === "number"){

  if(displayNumber === 0 ||  calculator.dataset.previousKey === "operator" || calculator.dataset.previousKey === "equal" ){
   displayEl.textContent = key;
   calculator.dataset.previousKey = "number";
  } else {
   displayEl.textContent = displayNumber + key;
  }

 } else if (buttonClass === "decimal" && !displayNumber.includes(".")){
  displayEl.textContent = displayNumber + ".";
  calculator.dataset.previousKey = "decimal";

 } else if (buttonClass === "operator"){
    calculator.dataset.operator = key;
    calculator.dataset.firstNumber = displayNumber;
    calculator.dataset.previousKey = "operator";
  
  console.log(calculator.dataset.operator);
  console.log(calculator.dataset.firstNumber); 
  

 } else if  (buttonClass === "clear"){
  displayEl.textContent = 0;
  calculator.dataset.previousKey = "clear";


 } else if (buttonClass === "equal"){
  calculator.dataset.previousKey = "equal";

  let secondNumber = displayNumber;

  console.log(calculator.dataset.firstNumber);
  console.log(calculator.dataset.operator);
  console.log(secondNumber);

  operate(calculator.dataset.firstNumber, calculator.dataset.operator, secondNumber);

 }



}));








