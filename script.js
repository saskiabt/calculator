// GLOBAL VARIABLES 
let firstNumber = '';
let secondNumber = '';
let operation = '';
let newResult = true; 
let decimalCount = 0; 
let equationIsClear = true
let equationDisplay = document.querySelector("#equation-display")
const displayValue = document.getElementById('numbers-display'); 




// MATH FUNCTIONS 
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
     return ' (: error '; 
    } 

    if (num1 >10000 || num2 > 10000) { 
        return (num1/num2).toFixed(2)
    } else return num1 / num2; 
}

const exponentiation = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2=parseFloat(num2); 

    return num1**num2;
}

const sqRoot = function(num1) { 
    num1=parseFloat(num1); 

    if (num1 === 0) return 0; 
    if (num1 < 0) return 0;
    return Math.sqrt(num1); 
}

// CLEAR DISPLAY FUNCTION
function clearDisplay() {
    displayValue.textContent = ""
    newResult = true; 
    decimalCount = 0;
}

// CLEAR EQUATION FUNCTION
function clearEquation() { 
    const equationDisplay = document.querySelector("#equation-display"); 
    equationDisplay.textContent = []; 
    newResult = true; 
    decimalCount = 0;
    equationIsClear = true
}

// CLEAR BUTTON 
let clearButton = document.getElementById('clear-btn'); 
clearButton.addEventListener('click', () => { 
    firstNumber = ''
    secondNumber = ''
    operation = ''
    clearDisplay(); 
    clearEquation(); 
    decimalCount = 0
})

// DELETE BUTTON: REMOVE LAST CHARACTER OF NUMBER DISPLAY: 
const deleteButton = document.querySelector("#delete-btn"); 
deleteButton.addEventListener('click', () => { 
    const equationDisplay = document.querySelector("#equation-display"); 

    displayValue.textContent = displayValue.textContent.slice(0,-1); 
    equationDisplay.textContent = equationDisplay.textContent.slice(0,-1); 
});

// POPULATE DISPLAY WITH NUMBER INPUTS:
function populateDisplay(num){ 

    if (!newResult) { 
        displayNumbers(); 
    } else {
        newResult = false
        clearDisplay(); 
        displayNumbers(); 
    }

    function displayNumbers() { 
        if (displayValue.textContent.length < 11) {
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
};

function populateEquation(foo) {
    equationDisplay.textContent += foo; 
    if (equationIsClear == true) { 
        clearEquation(); 
        equationDisplay.textContent = foo
    }
}

// NUMBER BUTTONS 
let numberButtons = document.querySelectorAll('.numberButton'); 
[...numberButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
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

// MATH BUTTONS 
const mathButtons = document.querySelectorAll('.math-buttons'); 
[...mathButtons].forEach((button) => {
    button.addEventListener('click', function(event) {
        let target = event.target
        decimalCount = 0;
         
        if(equationIsClear == true && !operation) { 
           populateEquation(target.textContent); 
        }

        if (displayValue.textContent === '') {
            event.preventDefault();
        } else {
            if(target.id === "add-btn") { 
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = add; 
                    clearDisplay(); 
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false; 
                        operation = add;
                        console.log(operation); 
                    } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                        firstNumber = parseFloat(displayValue.textContent); 
                        operation = add; 
                        clearDisplay(); 
                    }
                }
            }

            if(target.id === "subtract-btn") { 
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = subtract; 
                    clearDisplay(); 
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false;
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
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = multiply; 
                    clearDisplay(); 
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false;
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
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = divide;
                    clearDisplay(); 
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false;
                        operation = divide;
                    } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                        firstNumber = parseFloat(displayValue.textContent); 
                        operation = divide; 
                        clearDisplay(); 
                    }
                }
            }

            if(target.id === "exponent-btn") { 
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = exponentiation;
                    clearDisplay(); 
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false;
                        operation = exponentiation;
                    } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                        firstNumber = parseFloat(displayValue.textContent); 
                        operation = exponentiation; 
                        clearDisplay(); 
                    }
                }
            }

            if(target.id === "sqRoot-btn") { 
                if (!firstNumber) { // if firstNumber is empty
                    firstNumber = parseFloat(displayValue.textContent); 
                    console.log(`FirstNumber is ${firstNumber}`) 
                    operation = sqRoot;
                    evaluate()
                } else { // if firstNumber has already been declared 
                    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
                        evaluate(); 
                        equationIsClear = false;
                        operation = sqRoot;
                    } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                        firstNumber = parseFloat(displayValue.textContent); 
                        operation = exponentiation; 
                        clearDisplay(); 
                    }
                }
            }
        }
    })
})

function checkIsNegative(num) { 
   if (num.charAt(0) === "-") {
        return true;
   } return false;
}
// PLUS MINUS BUTTON 
const plusMinusButton = document.querySelector("#plus-minus-btn"); 
plusMinusButton.addEventListener('click', () => { 

    let boolean = checkIsNegative(displayValue.textContent);
    console.log(boolean);
    if (boolean=== true) { 
        displayValue.textContent = displayValue.textContent.substring(1); 
    } else { 
        displayValue.textContent = `-${displayValue.textContent}`;
        newResult = false;
    }

})


// OPERATE AND EVALUATE FUNCTIONS 
const operate = function(...args) { 
    let operator = args[0]; 
    let nums = []; 

    for(let i=1; i<args.length; i++) { 
        nums[i-1] = args[i]
    }
    return operator(...nums)
}; 

// // round result to scientific notation if above 8 figs
function expo(x,f) {
    return Number.parseFloat(x).toExponential(f);
}

function evaluate() { 

    if(!operation) { // if an operation has not been chosen and user selects equals before selecting operation
        firstNumber = parseFloat(displayValue.textContent); 
        newResult = true; 

    } else if (typeof firstNumber !== 'number') { // if firstNumber has been reset to blank string, allows for looping through multiple calls of evaluate()
        firstNumber = parseFloat(displayValue.textContent); 

        let result = operate(operation, firstNumber,secondNumber); 
        result = Math.round(result*10000000000)/10000000000; 

        clearDisplay(); 
        populateDisplay(result); 

        // equationDisplay.textContent = result; 
        clearEquation();
        equationIsClear = true;
        firstNumber = ''; 
        newResult = true;

    } else { 
        secondNumber = firstNumber; 
        firstNumber = displayValue.textContent; // sets firstNumber equal to the result // 

        let result = operate(operation, secondNumber,firstNumber); 
        result = Math.round(result*10000000000)/10000000000; 
        

        clearDisplay(); 
        populateDisplay(result); 
        // equationDisplay.textContent = result; 

        equationIsClear = true;
        clearEquation();
        firstNumber= result;
        secondNumber = null;
        newResult = true; 
    }
}

// EQUALS BUTTON --> EVALUATES FUNCTION 
const equalsButton = document.getElementById("equal-btn")
equalsButton.addEventListener('click', (event) => { 
    if (displayValue.textContent === '') {
        event.preventDefault();
    } else {
        if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === sqRoot) {
            evaluate(); 
            operation = null; 
        }
    };
}); 

  // KEYBOARD SUPPORT 
    document.addEventListener('keydown', (event) => {
        const eventKey = event.key
        switch(eventKey) {
            case '.' :
                document.getElementById("decimal-btn").click();                 break;
            case '0':
                document.getElementById('zero-btn').click(); 
                break;
            case "1":
                document.getElementById('one-btn').click(); 
                break;
            case "2":
                document.getElementById("two-btn").click();
                break;
            case "3":
                document.getElementById("three-btn").click();
                break;
            case "4":
                document.getElementById("four-btn").click();
                break;
            case "5":
                document.getElementById("five-btn").click();
                break;
            case "6":
                document.getElementById("six-btn").click();
                break;
            case "7":
                document.getElementById("seven-btn").click();
                break;
            case "8":
                document.getElementById("eight-btn").click(); 
                break;
            case "9": 
                document.getElementById('nine-btn').click(); 
                break;
            case "+":
                document.getElementById('add-btn').click();
                break;
            case "-":
                document.getElementById('subtract-btn').click(12); 
                break;
            case "*": 
                document.getElementById('multiply-btn').click(); 
                break;
            case "/":
                document.getElementById('divide-btn').click();
                break;
            case "=":
                document.getElementById('equal-btn').click();
                break;
            case "Enter": 
                document.getElementById('equal-btn').click();
                break;
            case "Backspace": 
               document.getElementById("delete-btn").click();
                break;
            case "Delete": 
                document.getElementById("delete-btn").click(); 
                break;
            case "Escape":
                document.getElementById("clear-btn").click();
            case "^":
                document.getElementById("exponent-btn").click();
        }
      return false; 
    });


// Make the calculator draggable: // 
window.onload = function() { 
    draggable(document.querySelector("#calculator-body-container")); 
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

  // create link to source code: 
    let a = document.createElement('a'); 
    let signature = document.getElementById('signature'); 
    a.textContent = "Made by Saskia Binder"; 
    signature.appendChild(a);
    signature.addEventListener('click', () => { 
        newTab(); 
    })

    function newTab() { 
        window.open(
            a.href = 'https://github.com/saskiabt/calculator'
        )
    }
    
    
    if (operation && firstNumber) { 

    }