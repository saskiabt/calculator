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

const evaluate = function(operator, ...numbers) { 
    let result = operator[0](...numbers)
    return result;
}


//populate the display with the first number 
let displayValue = document.getElementById('numbers-display'); 

function printNumbers() {
let numberbuttons = document.querySelectorAll('.numberButton'); 
[...numberbuttons].forEach((button) => {
    button.addEventListener('click', function(event) {
        displayValue.textContent += button.textContent
    })
})
}
printNumbers(); 

// enter the first operator and store it in variable OPERATION
let functionButtons = document.querySelectorAll('.functionButton'); 
let operation = []; 
let params =[];

[...functionButtons].forEach((button) => { 
    button.addEventListener('click', function(event) {
        params.push(displayValue.textContent); // save the first number to the first slot in array PARAMS on function button click

        let target = event.target; 
        if (target.id === "divide-btn") { 
            operation.push(divide)
        } else if (target.id === 'multiply-btn') { 
            operation.push(multiply)
        } else if (target.id === 'subtract-btn') { 
            operation.push(subtract)
        } else if (target.id === 'add-btn') { 
            operation.push(add) 
        }
        
        console.log(operation); 

        displayValue.textContent = null; 
        console.log(params)


    }, false);
}); 


// when equal button is pressed for the first time, evaluate the 2 numbers in params and the first operator in operators
let equalButton = document.getElementById('equal-btn');
    equalButton.addEventListener('click', () => {
        params.push(displayValue.textContent); // save the first number to the first slot in array PARAMS on function button click
        console.log(params)

        let result = evaluate(operation, ...params); // evaluate the first pair of numbers with first operator and save value in variable called RESULT
        displayValue.textContent = result; // display the result of the equation in the display box
        console.log(result); 
        params = [result]; // set the result as the first variable in the next equation
        console.log(params)
    })

let clearButton = document.getElementById('clear-btn'); 
clearButton.addEventListener('click', () => { 
    params = []; 
    displayValue.textContent = ''; 
    operation = [];
})