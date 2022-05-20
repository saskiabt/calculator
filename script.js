// Global Variables 
let firstNumber;
let secondNumber;
let operation;
let newResult = true; 

// Math Functions 
const add = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    return num1 + num2; 
  };


const subtract = function(num1,num2) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    return num1 + num2; 
}

const multiply = function(num1,num2) { 
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    return num1 * num2; 
}

const divide = function(num1,num2) { 
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 

    if (num2 === 0) { 
     return 'ERROR'; 
    } 
    
    return num1 / num2; 
}

const evaluate = function(operator,...params) { 
    let result = operator(...params); 
    return result; 
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
        }
    }
}

// On click of each number buttons, populate the display with numberButton textContent

let numberButtons = document.querySelectorAll('.numberButton'); 
[...numberButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
        const displayValue = document.getElementById('numbers-display'); 
        if(event.target.id === 'zero-btn') { 
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
    })
})

// Math buttons 
const multiplyBtn = document.getElementById("multiply-btn"); 
// const addBtn
// const subtractBtn
// const divideBtn



