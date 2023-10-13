// ADD A FUNCTION CALLED CALCULATE
let x, y, operation
function calculate(x, y, operation){
    switch (operation){
        case '+':
           return alert(`${x} + ${y} = ${(x+y).toFixed(2)} `)
        case '-':
           return alert(`${x} - ${y} = ${(x-y).toFixed(2)} `)
        case '*':
           return alert(`${x} * ${y} = ${(x*y).toFixed(2)} `)
        case '/':
           return alert(`${x} / ${y} = ${(x/y).toFixed(2)} `)
    }

    
}

// COLLECT FIRST NUMBER FROM USER
x = parseInt(prompt('Enter first number'))

// COLLECT SECOND NUMBER FROM USER
y = parseInt(prompt('Enter second number'))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

do {
    operation = prompt('Enter ADD SUBSTRACT DIVIDE OR MULTIPLY to perform by symbol: +, -, /, *')
    if (operation === '+' || operation === '*' || operation === '-' || operation === '/') {
        break
    } else {
        alert('Enter a valid operation')
    }
} while (operation !== '-' || operation !== '+' || operation !== '/' || operation !== '*')

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(x,y,operation)
alert(result)

