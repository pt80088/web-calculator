let inputField = document.querySelectorAll("#input");
let operators = document.querySelectorAll(".operators div");
let numbers = document.querySelectorAll(".numbers div");
let equalsBtn = document.querySelectorAll(".equals")[0];
let clearBtn = document.getElementById("clear");
let decimalBtn = document.getElementById("decimal");

let currentNumber = 0;

let currentCalculation = [];

// establishes event listener for number buttons
for (let i = 0; i < numbers.length - 2; i++) {
  numbers[i].addEventListener("click", function (e) {
    let number = Number(e.target.textContent); // catches number from click event
    inputField[0].value += number; // adds number to input field
    console.log(number);
  });
}

clearBtn.addEventListener("click", clear);

// event listener for operator buttons
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function (e) {
    let operator = e.target.textContent;
    operation(operator); // sends operator to operation function
    console.log(operator);
  });
}

equalsBtn.addEventListener("click", calculate);

decimalBtn.addEventListener("click", addDecimal);

// event listener for equals or enter keys

addEventListener("keypress", function (e) {
  if (e.key === "=") {
    calculate();
  } else {
    if (e.key === "Enter") {
      calculate();
    }
  }
});

//event listener for numbers

for (let i = 0; i < 10; i++) {
  addEventListener("keypress", function (e) {
    let number = Number(e.key);
    if (number === i) {
      console.log(number);
    }
  });
}

addEventListener("keypress", function (e) {
  if (e.key === "+" || e.key === "*" || e.key === "-" || e.key === "/") {
    operation(e.key);
  }
});

// operation function
// (will need to store numerical value and operator awaiting further numerical value and equals sign)

function operation(e) {
  currentNumber = Number(inputField[0].value);
  currentCalculation.push(currentNumber, e);
  inputField[0].value = "";
  console.log(e.key);
  console.log(currentCalculation);
}

// calculate function

function calculate() {
  currentNumber = Number(inputField[0].value);
  currentCalculation.push(currentNumber);

  inputField[0].value = "";
  console.log("calc function triggered");
  console.log(currentNumber);
  calculateSum(currentCalculation);
}

function addDecimal() {
  // inputField[0].value += 'decimal'; // cannot be parsed!?
}

// need a for loop to iterate over array and convert to calculation, push in current calculation array https://www.geeksforgeeks.org/evaluate-an-array-expression-with-numbers-and/
function calculateSum() {
  for (i in currentCalculation) {
    console.log(currentCalculation[i]);
  }
}

function clear() {
  currentNumber = 0;
  currentCalculation = [];
  inputField[0].value = "";
}
