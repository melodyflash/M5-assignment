//STEP 1 
let enterNum = parseFloat(prompt('Enter number to divide by 2'))
function halfNumber(enterNum){
      return enterNum/2
}
document.write(`Half of ${enterNum} is ${halfNumber(enterNum).toFixed(2)}</br>`)
//STEP 2
let enterNum1 = parseFloat(prompt('Enter number to square'))
function squareNumber(enterNum1){
    return enterNum1*enterNum1
}
document.write(`The result of squaring ${enterNum1} is ${squareNumber(enterNum1).toFixed(2)}</br>`)
//STEP 3
let totalNum = parseFloat(prompt('Calculate percentage: Enter Whole amount'))
let partialNum = parseFloat(prompt('Calculate percentage: Enter partial amount'))

function percentageOf(totalNum, partialNum){
    return (partialNum / totalNum) * 100
}
document.write(`${partialNum} is ${percentageOf(totalNum, partialNum).toFixed(2)}% of ${totalNum}</br>`)
//STEP 4
let firstParam = parseFloat(prompt('Find Modulus: Enter first number'))
let secondParam = parseFloat(prompt('Find Modulus: Enter second number'))

function findModulus(firstParam, secondParam){
    return firstParam % secondParam
}
document.write(`${findModulus(firstParam, secondParam).toFixed(2)} is the modulus of ${secondParam} and ${firstParam}</br>`)
//STEP 5