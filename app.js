let inputField = document.querySelectorAll("#input");
let operatorBtns = document.querySelectorAll(".operators div");
let numbers = document.querySelectorAll(".numbers div");
let equalsBtn = document.querySelectorAll(".equals")[0];
let clearBtn = document.getElementById("clear");
let decimalBtn = document.getElementById("decimal");
let currentNumberDisplay = document.getElementsByClassName("current-number")[0];

let currentNumber = 0;

let calcFirstNumber = 0;
let calcSecondNumber = 0;
let calcOperator = "";

// functions to convert operators from strings to operators

let operators = {
  "+": function (a, b) {
    return a + b;
  },
  "*": function (a, b) {
    return a * b;
  },
  "/": function (a, b) {
    return a / b;
  },
  "-": function (a, b) {
    return a - b;
  },
};

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
for (let i = 0; i < operatorBtns.length; i++) {
  operatorBtns[i].addEventListener("click", function (e) {
    let operator = e.target.textContent;
    operation(operator); // sends operator to operation function
    console.log(operator);
  });
}

equalsBtn.addEventListener("click", calculate);

decimalBtn.addEventListener("click", addDecimal);

//event listener for keyboard input
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

// event listener for number keys

for (let i = 0; i < 10; i++) {
  addEventListener("keypress", function (e) {
    let number = Number(e.key);
    if (number === i) {
      console.log(number);
    }
  });
}

//event listener for operator keys

addEventListener("keypress", function (e) {
  if (e.key === "+" || e.key === "*" || e.key === "-" || e.key === "/") {
    operation(e.key);
  }
});

function operation(e) {
  // if (calcFirstNumber === 0) {
  //   calcFirstNumber = Number(inputField[0].value);
  //   calcOperator = e;
  //   inputField[0].value = "";
  //   console.log("calcFirstNumber:" + calcFirstNumber);
  // } else {
  calcOperator = e;
  calcFirstNumber = Number(inputField[0].value);
  inputField[0].value = "";
  currentNumber = operators[calcOperator](calcFirstNumber, currentNumber);
  currentNumberDisplay.innerHTML = currentNumber;

  // console.log(calcFirstNumber);
  // console.log(calcOperator);
  console.log("currentNumber:" + currentNumber);
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
  calcFirstNumber = 0;
  calcSecondNumber = 0;
  calcOperator = "";
  inputField[0].value = "";
}
