const add = function(...args) {
    let sum = 0
    for (i=0; i<args.length; i++) { 
      sum += args[i]
    }
    parseInt(sum); 
    return sum; 
  };

// console.log(add(10,5,10))

const subtract = function(...args) {
    let difference = args[0]
    for (let i=1; i<args.length; i++) { 
        difference -= args[i]; 
    }
    return difference
}

const multiply = function(...args) { 
    let product = 1
    for (let i=0; i<args.length; i++) { 
        product *= args[i]; 
    }
    return product;
}

const divide = function(...args) { 
    let quotient = args[0]
    for (let i=1; i<args.length; i++) { 
        if (args[i] === 0) {
            return 'ERROR'
        } else {
            quotient /= args[i]
        }
    }
    return quotient; 
}

const operate = function(operator,...params) { 
    console.log(operator);
    let result = operator(...params); 
    return result; 
}

// Create the functions that populate the display when you click the number buttons 
let numbersDisplay = document.querySelector('#numbers-display'); 
let numberButtons = document.querySelectorAll('.numberButton'); 
let displayValue; 

[...numberButtons].forEach((button) => {
    button.addEventListener('click', () => {
      numbersDisplay.textContent += button.textContent
    });
});



// save which operation has been chosen
const functionButtons = document.querySelectorAll('.functionButton'); 
let operation; 

function chooseOperator(operator) { 
    operation = operator
    console.log(operation); 
    return operation;
}
// let functionButtons = document.querySelectorAll('.functionButton'); 

const divideBtn = document.getElementById('divide-btn'); 
const multiplyBtn = document.getElementById('multiply-btn');
const subtractBtn = document.getElementById('subtract-btn');
const addBtn = document.getElementById('add-btn');

divideBtn.onclick = function(){chooseOperator(divide)}; 
multiplyBtn.onclick = function(){chooseOperator(multiply)}; 
subtractBtn.onclick = function(){chooseOperator(subtract)}; 
addBtn.onclick = function(){chooseOperator(add)}; 

// save the numbers to run operate on in an array:
let inputs = []; 
[...functionButtons].forEach((button) => { 
    button.addEventListener('click', () => {
        inputs.push(numbersDisplay.textContent)
        numbersDisplay.textContent = null
        console.log(inputs)
        numbersDisplay.textContent = inputs[-1]
    })
})


// Run the operate function on the first number, stored in displayValue, and the operator, stored in operation; //
const equalBtn = document.getElementById('equal-btn'); 

equalBtn.addEventListener('click', () => { 
    console.log(inputs); 
    let total = operate(operation, ...inputs); 
    console.log(total);
    inputs = total; 
    numbersDisplay.textContent = total
    return total; 
    // console.log(result); 
})








