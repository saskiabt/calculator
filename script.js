// GLOBAL VARIABLES 
let firstNumber = '';
let secondNumber = '';
let operation = '';
let newResult = true; 
let decimalCount = 0; 


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
    return num1 / num2; 
}

const exponentiation = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2=parseFloat(num2); 

    return num1**num2;
}

const root = function(num1,num2) { 
    num1=parseFloat(num1); 
    num2 = parseFloat(num2); 

    if (num1 === 0 || num2 === 0) return 0; 
    if (num1 < 0 || num2 <0) return 0;
    return num2**(1/num1); 
}

// CLEAR DISPLAY FUNCTION
function clearDisplay() {
    const displayValue = document.getElementById('numbers-display'); 
    displayValue.textContent = ""
    newResult = true; 
}

function clearEquation() { 
    const equationDisplay = document.querySelector("#equation-display"); 
    equationDisplay.textContent = []; 
    newResult = true; 
}

// CLEAR BUTTON 
let clearButton = document.getElementById('clear-btn'); 
clearButton.addEventListener('click', () => { 
    firstNumber = ''
    secondNumber = ''
    operation = ''
    clearDisplay(); 
    clearEquation(); 
})

// DELETE BUTTON: REMOVE LAST CHARACTER OF NUMBER DISPLAY: 
const deleteButton = document.querySelector("#delete-btn"); 
deleteButton.addEventListener('click', () => { 
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display"); 

    displayValue.textContent = displayValue.textContent.slice(0,-1); 
    equationDisplay.textContent = equationDisplay.textContent.slice(0,-1); 
});

// POPULATE DISPLAY WITH NUMBER INPUTS:23
function populateDisplay(num){ 
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display")


    if (!newResult) { 
        displayNumbers(); 
    } else {
        newResult = false
        clearDisplay(); 
        clearEquation();
        displayNumbers(); 
    }

    function displayNumbers() { 
        if(displayValue.textContent.length < 19) {
            newResult = false
            if(displayValue.textContent == "0" && num === ".") { 
                displayValue.textContent += num;
                equationDisplay.textContent += num;
            } else if (displayValue.textContent === "0" && num !=="."){
                displayValue.textContent = num
                equationDisplay.textContent = num
            } else if (displayValue.textContent == "") { 
                displayValue.textContent = num; 
                equationDisplay.textContent += num;

            } else { 
                displayValue.textContent += num;
                equationDisplay.textContent += num;

            };
        }
    };
};


// NUMBER BUTTONS 

let numberButtons = document.querySelectorAll('.numberButton'); 
[...numberButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
        const displayValue = document.getElementById('numbers-display'); 
        // const equationDisplay = document.querySelector("#equation-display")
        let target = event.target

        if (target.id === 'decimal-btn') {
            decimalCount++; 
            if (target.id === "decimal-btn" && decimalCount >1) { 
                return;
            } else {
                populateDisplay(".")
            };
        } 
        
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
    }); 
})

// MATH BUTTONS 
const mathButtons = document.querySelectorAll('.math-buttons'); 
[...mathButtons].forEach((button) => {
    button.addEventListener('click', function(event) {
        let target = event.target
        decimalCount = 0; 

        const displayValue = document.getElementById('numbers-display'); 
        const equationDisplay = document.querySelector("#equation-display"); 

    
        if(target.id === "add-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = add; 
                clearDisplay(); 
                equationDisplay.textContent += '+';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '+';
                    evaluate(); 
                    operation = add; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '+';
                    operation = add; 
                }
            }
        }

        if(target.id === "subtract-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = subtract; 
                clearDisplay(); 
                equationDisplay.textContent += '-';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '-';
                    evaluate(); 
                    operation = subtract; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '-';
                    operation = subtract; 
                }
            }
        }

        if(target.id === "multiply-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = multiply; 
                clearDisplay(); 
                equationDisplay.textContent += '*';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '*';
                    evaluate(); 
                    operation = multiply; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '*';
                    operation = multiply; 
                }
            }
        }

        if(target.id === "divide-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = divide; 
                clearDisplay(); 
                equationDisplay.textContent += '/';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '/';
                    evaluate(); 
                    operation = divide; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '/';
                    operation = divide; 
                }
            }
        }

        if(target.id === "exponent-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = exponentiation; 
                clearDisplay(); 
                equationDisplay.textContent += '^';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '^';
                    evaluate(); 
                    operation = exponentiation; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '^';
                    operation = exponentiation; 
                }
            }
        }

        if(target.id === "root-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 

            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = root; 
                clearDisplay(); 
                equationDisplay.textContent += '√';
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    equationDisplay.textContent += '√';
                    evaluate(); 
                    operation = root; 
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    equationDisplay.textContent += '√';
                    operation = root; 
                }
            }
        }

    })
})

// PLUS MINUS BUTTON 
const plusMinusButton = document.querySelector("#plus-minus-btn"); 
plusMinusButton.addEventListener('click', () => { 
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display"); 

    if (displayValue.textContent.includes('-') === false) { 
        displayValue.textContent = `-${displayValue.textContent}`;
    } else { 
        displayValue.textContent = displayValue.textContent.substring(1); 
        // equationDisplay.textContent = equationDisplay.textContent.substring(1); 
    }

    if (equationDisplay.textContent.includes('-') === false) { 
        equationDisplay.textContent = `-${equationDisplay.textContent}`
    } else { 
        equationDisplay.textContent = equationDisplay.textContent.substring(1); 
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
    const displayValue = document.getElementById('numbers-display'); 

    if(!operation) { // if an operation has not been chosen and user selects equals before selecting operation
        firstNumber = parseFloat(displayValue.textContent); 
        newResult = true; 
    } else if (typeof firstNumber !== 'number') { // if firstNumber has been reset to blank string, allows for looping through multiple calls of evaluate()
        firstNumber = parseFloat(displayValue.textContent); 
        console.log(typeof firstNumber); 
        firstNumber = Number(firstNumber); 
        let result = operate(operation, firstNumber,secondNumber); 
        console.log(result); 
        clearDisplay(); 
        clearEquation()
        populateDisplay(result); 
        firstNumber = ''; 
        newResult = true;
    } else { 
        secondNumber = firstNumber; 
        firstNumber = displayValue.textContent; // sets firstNumber equal to the result // 

        let result = operate(operation, secondNumber,firstNumber); 
        clearDisplay(); 
        clearEquation()
        populateDisplay(result); 
        firstNumber= result;
        secondNumber = null;
        newResult = true; 
    }
}

// EQUALS BUTTON --> EVALUATES FUNCTION 
const equalsButton = document.getElementById("equal-btn")
equalsButton.addEventListener('click', () => { 

    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
        evaluate(); 
    };
    operation = null; 
}); 

  // KEYBOARD SUPPORT 
    document.addEventListener('keydown', (event) => {
        const eventKey = event.key
        switch(eventKey) {
            case '.' :
                document.getElementById("decimal-btn").click(); 
                break;
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