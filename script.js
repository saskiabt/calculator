const add = function(...args) {
    let sum = null
    let i= 0
      while (i<args.length) { 
      sum += args[i]
      i++
    }
    parseInt(sum); 
    return sum; 
  };

console.log(add(10,5,10))

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
    let result = operator(...params); 
    // if (operator === divide) { 
    //     result = divide(...params); 
    // } else if (operator === multiply) { 
    //    result = multiply(...params); 
    // } else if (operator === subtract) { 
    //     result = subtract(...params); 
    // } else if (operator === add) {
    //     result = add(...params); 
    // }
    return result; 
}

console.log(operate(divide,3,4)); 
console.log(operate(multiply,10,3,3))
console.log(operate(add,3,4,5))
console.log(operate(divide,12,4,1))

// Create the functions that populate the display when you click the number buttons 
let numbersDisplay = document.querySelector('#numbers-display'); 
let numberButtons = document.querySelectorAll('.numberButton'); 
let displayValue 

[...numberButtons].forEach((button) => {
    button.addEventListener('click', () => {
      console.log("spread forEach worked");
      numbersDisplay.textContent += button.textContent
      displayValue = numbersDisplay.textContent
        console.log(displayValue)
    });
});
