// Global Variables 
let firstNumber = '';
let secondNumber = '';
let operation = '';
let newResult = true; 
let decimalCount = 0; 


// Math Functions 
const add = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    return num1 + num2; 
  };


const subtract = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    return num1 - num2; 
}

const multiply = function(num1,num2) { 
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1 * num2; 
}

const divide = function(num1,num2) { 
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 

    if (num2 == 0) { 
     const displayValue = document.getElementById('numbers-display'); 
     displayValue.textContent = 'ERROR'
     return 'ERROR'; 
    } 
    return num1 / num2; 
}


// Clear display function and clear button
function clearDisplay() {
    const displayValue = document.getElementById('numbers-display'); 
    displayValue.textContent = ""
    newResult = true; 

}

let clearButton = document.getElementById('clear-btn'); 
clearButton.addEventListener('click', () => { 
    firstNumber = ''
    secondNumber = ''
    operation = ''
    clearDisplay(); 
})


//populate the display with NUM if display is cleared, or else clear display and populate display with num
function populateDisplay(num){ 
    const displayValue = document.getElementById('numbers-display'); 

    if (!newResult) { 
        displayNumbers(); 
    } else {
        newResult = false
        clearDisplay(); 
        displayNumbers(); 
    }

    function displayNumbers() { 
        newResult = false
        if(displayValue.textContent == "0" && num === ".") { 
            displayValue.textContent += num;
        } else if (displayValue.textContent == "") { 
            displayValue.textContent = num; 
        } else { 
            displayValue.textContent += num;
        };
    };
};

// On click of each number buttons, populate the display with numberButton textContent

let numberButtons = document.querySelectorAll('.numberButton'); 
[...numberButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
        const displayValue = document.getElementById('numbers-display'); 
        let target = event.target
        if (target.id === 'decimal-btn') {
            decimalCount++; 
            console.log(decimalCount)
            if (target.id === "decimal-btn" && decimalCount >1) { 
                return;
            } else {
                populateDisplay(".")
            };
        } else {
            if(target.id === 'zero-btn') { 
                if(displayValue.textContent == "0") { 
                    return; 
                } else {
                    populateDisplay(0); 
                }
            } else if (displayValue.textContent === '0') {
                newResult = true;
                populateDisplay(event.target.textContent); 
            } else { 
                populateDisplay(event.target.textContent); 
            }
        } 
    }); 
})

// Math buttons 
const mathButtons = document.querySelectorAll('.math-buttons'); 
[...mathButtons].forEach((button) => {
    button.addEventListener('click', function(event) {
        let target = event.target
        decimalCount = 0; 
        if(target.id === "add-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = add; 
                clearDisplay(); 
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract) {  // runs evaluate if first set of params has already been chosen
                    evaluate(); 
                    operation = add
                    console.log(operation); 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = add; 
                    clearDisplay(); 
                }
            }
        }

        if(target.id === "subtract-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = subtract; 
                clearDisplay(); 
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract) {  // runs evaluate if first set of params has already been chosen
                    evaluate(); 
                    operation = subtract; 
                    console.log(operation); 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = subtract; 
                    clearDisplay(); 
                }
            }
        }

        if(target.id === "multiply-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = multiply; 
                clearDisplay(); 
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract) {  // runs evaluate if first set of params has already been chosen
                    evaluate(); 
                    operation = multiply; 
                    console.log(operation); 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = multiply; 
                    clearDisplay(); 
                }
            }
        }

        if(target.id === "divide-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = divide;
                clearDisplay(); 
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract) {  // runs evaluate if first set of params has already been chosen
                    evaluate(); 
                    operation = divide;
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = divide; 
                    clearDisplay(); 
                }
            }
        }


    })
})

const operate = function(...args) { 
    let operator = args[0]; 
    let nums = []; 

    for(let i=1; i<args.length; i++) { 
        nums[i-1] = args[i]
    }
    return operator(...nums)
}; 

function evaluate() { 
    const displayValue = document.getElementById('numbers-display'); 

    if(!operation) { // if an operation has not been chosen and user selects equals before selecting operation
        firstNumber = parseFloat(displayValue.textContent); 
        newResult = true; 
    } else if (typeof firstNumber !== 'number') { // if firstNumber has been reset to blank string, allows for looping through multiple calls of evaluate()
        firstNumber = parseFloat(displayValue.textContent); 
        let result = operate(operation, firstNumber,secondNumber); 
        clearDisplay(); 
        populateDisplay(result); 
        firstNumber = ''; 
        newResult = true;
    } else { 
        secondNumber = firstNumber; 
        firstNumber = displayValue.textContent; // sets firstNumber equal to the result // //FIRSTNUMBER = 20

        let result = operate(operation, secondNumber,firstNumber); 
        clearDisplay(); 
        populateDisplay(result); 
        firstNumber= result;
        secondNumber = null;
        newResult = true; 
    }
}

// evaluate when equals button is pressed 
const equalsButton = document.getElementById("equal-btn")
equalsButton.addEventListener('click', () => { 

    if (operation === multiply || operation === divide || operation === add || operation === subtract) evaluate(); 
    operation = null; 
}); 
// const addBtn
// const subtractBtn
// const divideBtn



// Make the calculator draggable: // 
window.onload = function() {
    draggable(document.querySelector("#calculator-body"));
  }
  
  function draggable(el) {
    el.addEventListener('mousedown', function(e) {
      var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
      var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
      
      function mouseMoveHandler(e) {
        el.style.top = (e.clientY - offsetY) + 'px';
        el.style.left = (e.clientX - offsetX) + 'px';
      }
  
      function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
      }
  
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', reset);
    });
  }