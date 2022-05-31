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
    return num1**(1/num2); 
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

// DELETE BUTTON 


// POPULATE DISPLAY WITH NUMBER INPUTS:
function populateDisplay(num){ 
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display")


    if (!newResult) { 
        displayNumbers(); 
    } else {
        newResult = false
        // clearDisplay(); 
        if (displayValue.textContent.includes('NaN') == true || displayValue.textContent.includes('Infinity') == true) {
            clearDisplay;
        }
        if (equationDisplay.textContent.includes('NaN') == true || equationDisplay.textContent.includes('Infinity') == true) {
            clearEquation;
        }
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

//comment
// NUMBER BUTTONS 

let numberButtons = document.querySelectorAll('.numberButton'); 
[...numberButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
        const displayValue = document.getElementById('numbers-display'); 
        const equationDisplay = document.querySelector("#equation-display")

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

        const displayValue = document.getElementById('numbers-display'); 
        const equationDisplay = document.querySelector("#equation-display"); 

        if (equationDisplay.textContent.includes('ERR') === true || equationDisplay.textContent.includes('Infinity') === true || equationDisplay.textContent.includes('NaN') === true) {

        }
         if(target.id === "add-btn") { 
            const displayValue = document.getElementById('numbers-display'); 
            const equationDisplay = document.querySelector("#equation-display"); 
            if (!firstNumber) { // if firstNumber is empty
                firstNumber = parseFloat(displayValue.textContent); 
                console.log(`FirstNumber is ${firstNumber}`) 
                operation = add; 
                clearDisplay(); 
                if(!equationDisplay.textContent.includes('+')) { 
                    equationDisplay.textContent += '+';
                }
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    evaluate(); 
                    operation = add
                    console.log(operation); 
                    if(!equationDisplay.textContent.includes('+')) { 
                        equationDisplay.textContent += '+';
                    }
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = add; 
                    clearDisplay(); 
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
                    evaluate(); 
                    operation = subtract; 
                    console.log(operation); 
                    equationDisplay.textContent += '-';
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = subtract; 
                    clearDisplay(); 
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
                    evaluate(); 
                    operation = multiply; 
                    console.log(operation); 
                    equationDisplay.textContent += '*';
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = multiply; 
                    clearDisplay(); 
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
                    evaluate(); 
                    operation = divide;
                    equationDisplay.textContent += '/';
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = divide; 
                    clearDisplay(); 
                    equationDisplay.textContent += '/';
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
                    evaluate(); 
                    operation = exponentiation;
                    equationDisplay.textContent += '^';
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = exponentiation; 
                    clearDisplay(); 
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
                if(!equationDisplay.textContent.includes('√')) { 
                    equationDisplay.textContent += '√';
                }
            } else { // if firstNumber has already been declared 
                if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) {
                    evaluate(); 
                    operation = root;
                    if(equationDisplay.textContent.includes('√') === false) { 
                        equationDisplay.textContent += '√';
                    } else {
                        equationDisplay.textContent = 'Error, Double Operation'
                    }
                } else { // if firstNumber has been added because user input first number and pressed equals without adding an operator
                    firstNumber = parseFloat(displayValue.textContent); 
                    operation = exponentiation; 
                    clearDisplay(); 
                    equationDisplay.textContent += '^'; 

                }
            }
        }

    })
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

        // round result to scientific notation w/ 3 figs if above 8 figs
        if (result.toString().length > 8) { 
            result = expo(result,3); 
        }
        clearDisplay(); 
        clearEquation()
        populateDisplay(result); 
        firstNumber = ''; 
        newResult = true;
    } else { 
        secondNumber = firstNumber; 
        firstNumber = displayValue.textContent; // sets firstNumber equal to the result // 

        let result = operate(operation, secondNumber,firstNumber); 
        console.log(result.toString().length); 

        if (result.toString().length > 8) { 
            result = expo(result,3); 
        }
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

    if (operation === multiply || operation === divide || operation === add || operation === subtract || operation === exponentiation || operation === root) evaluate(); 
    operation = null; 
}); 

// DELETE BUTTON: REMOVE LAST CHARACTER OF NUMBER DISPLAY: 
const deleteButton = document.querySelector("#delete-btn"); 
deleteButton.addEventListener('click', () => { 
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display"); 

    displayValue.textContent = displayValue.textContent.slice(0,-1); 
    equationDisplay.textContent = equationDisplay.textContent.slice(0,-1); 
});

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

  // KEYBOARD SUPPORT 

  // keyboard for numbers display: 

  document.addEventListener('keydown', (event) => { 
    const keyName = event.key; 
    const keyCode = event.code;
    const displayValue = document.getElementById('numbers-display'); 
    const equationDisplay = document.querySelector("#equation-display"); 

   if (event.shiftKey) return; 
   
   if (keyName === "0" || keyCode === "Digit0") { 
        if(displayValue.textContent == "0") { 
            return; 
        } else {
            populateDisplay(0); 
        } 
   } else if (keyName === "1" || keyCode === "Digit1") { 
       if (displayValue.textContent === "0") { 
        newResult = true;
        populateDisplay("1"); 
       } else { 
           populateDisplay("1"); 
       }
   } else if (keyName === "2" || keyCode === "Digit2") { 
        if (displayValue.textContent === "0") { 
        newResult = true;
        populateDisplay("2"); 
        } else { 
            populateDisplay("2"); 
        }
    } else if (keyName === "3" || keyCode === "Digit3") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("3"); 
        } else { 
            populateDisplay("3"); 
        }
    } else if (keyName === "4" || keyCode === "Digit4") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("4"); 
        } else { 
            populateDisplay("4"); 
        }
    } else if (keyName === "5" || keyCode === "Digit5") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("5"); 
        } else { 
            populateDisplay("5"); 
        }
    } else if (keyName === "6" || keyCode === "Digit6") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("6"); 
        } else { 
            populateDisplay("6"); 
        }
    } else if (keyName === "7" || keyCode === "Digit7") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("7"); 
        } else { 
            populateDisplay("7"); 
        }
    } else if (keyName === "8" || keyCode === "Digit8") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("8"); 
        } else { 
            populateDisplay("8"); 
        }
    } else if (keyName === "9" || keyCode === "Digit9") { 
        if (displayValue.textContent === "0") { 
         newResult = true;
         populateDisplay("9"); 
        } else { 
            populateDisplay("9"); 
        }
    }
  }, false); 