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

//event listeners for keyboard inputs
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
  calcOperator = e;
  calcFirstNumber = Number(inputField[0].value);
  inputField[0].value = "";
  currentNumber = operators[calcOperator](calcFirstNumber, currentNumber);
  currentNumberDisplay.innerHTML = currentNumber;

  console.log("currentNumber:" + currentNumber);
}

// calculate function

function calculate() {
  currentNumber = Number(inputField[0].value);

  currentNumber = operators[calcOperator](calcFirstNumber, currentNumber);
  currentNumberDisplay.innerHTML = currentNumber;

  inputField[0].value = "";
  console.log("calc function triggered");
}

function addDecimal() {
  // inputField[0].value += 'decimal'; // cannot be parsed!?
}

function clear() {
  currentNumber = 0;
  calcFirstNumber = 0;
  calcSecondNumber = 0;
  calcOperator = "";
  inputField[0].value = "";
  currentNumberDisplay.innerHTML = 0;
}
