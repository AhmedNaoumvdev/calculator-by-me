const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('.ac');
const clear = document.querySelector('.clear');
const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
const equals = document.querySelector('.equal');

let firstOperand = [];
let secondOperand = [];
let operandSwitch = false;
let result = 0;
let operator;

clear.onclick = function(){
    if(displayOperation.textContent.length > 0) {
        displayOperation.textContent = displayOperation.textContent.substring(0, displayOperation.textContent.length-1);
    }
}

ac.onclick = function(){
    displayOperation.textContent = '';
    displayResult.textContent = '';
    firstOperand = [];
    secondOperand = [];
    result = 0;
    operandSwitch = false;
}

equals.onclick = doingMath;

function doingMath(operator){
    if(operator == '+'){
        result = parseInt(firstOperand.join('')) + parseInt(secondOperand.join(''));
    }
    displayResult.textContent = result;
}

numbers.forEach(number =>{
    number.addEventListener('click', (e) =>{
        displayOperation.textContent += number.dataset.value;
        if(!operandSwitch){
            firstOperand.push(number.dataset.value);
        }else{
            secondOperand.push(number.dataset.value);
        }
        console.log(firstOperand, secondOperand)
    })
});

operators.forEach(opera =>{
    opera.addEventListener('click', () =>{
        if(opera.dataset.op === 'add'){
            displayOperation.textContent += '+';
            operator = '+';
            operandSwitch = true;
        }else if(opera.dataset.op === 'sub'){
            displayOperation.textContent += '-';
            operator = '-';
            operandSwitch = true;
        }else if(opera.dataset.op === 'mul'){
            displayOperation.textContent += 'x';
            operator = '*';
            operandSwitch = true;
        }else{
            displayOperation.textContent += '%';
            operator = '/';
            operandSwitch = true;
        }
    });
})