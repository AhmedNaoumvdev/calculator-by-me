const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const ac = document.querySelector('.ac');
const clear = document.querySelector('.clear');
const displayOperation = document.querySelector('.operation');
const displayResult = document.querySelector('.result');
const equals = document.querySelector('.equal');


let expression = [];
let result = 0;

clear.onclick = function(){
    if(displayOperation.textContent.length > 0) {
        displayOperation.textContent = displayOperation.textContent.substring(0, displayOperation.textContent.length-1);
        expression.pop();
    }
}

ac.onclick = function(){
    displayOperation.textContent = '';
    displayResult.textContent = '';
    expression = [];
    result = 0;
    operandSwitch = false;
}

equals.onclick = doingMath;

function doingMath(operator){
    result = eval(expression.join(''));
    displayResult.textContent = result;
}

numbers.forEach(number =>{
    number.addEventListener('click', (e) =>{
        displayOperation.textContent += number.dataset.value;
        expression.push(number.dataset.value)
        console.log(expression.join(''));
    })
});

operators.forEach(opera =>{
    opera.addEventListener('click', () =>{
        if(opera.dataset.op === 'add'){
            displayOperation.textContent += '+';
            expression.push('+');
        }else if(opera.dataset.op === 'sub'){
            displayOperation.textContent += '-';
            expression.push('-');
        }else if(opera.dataset.op === 'mul'){
            displayOperation.textContent += 'x';
            expression.push('*');
        }else{
            displayOperation.textContent += '%';
            expression.push('/');
        }
    });
})