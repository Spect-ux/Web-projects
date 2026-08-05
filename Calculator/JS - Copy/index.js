const display = document.getElementById("display");
const operator = document.getElementsByClassName("operator-btn");
let runningTotal = display.value;
let pendingOperator = null;
let currentNumber = 0;

function appendToDisplay(input){

    if(input === '.' && display.value.includes('.')){
        return
    }
    else{
        display.value += input;
        return input;
    }
}

window.appendToDisplay = appendToDisplay;

function chooseOperator(op){
    if(pendingOperator === null){
        runningTotal = display.value;
        

    }
    else{
        runningTotal = Number(runningTotal);
        currentNumber = Number(display.value);

        if(pendingOperator === '+'){
            runningTotal = runningTotal + currentNumber;
        }
        else if(pendingOperator === '-'){
            runningTotal = runningTotal - currentNumber;
        }
        else if(pendingOperator === '*'){
            runningTotal = runningTotal * currentNumber;
        }
        else if(pendingOperator === '/' && display.value === '0'){
            display.value = "You can not divide by Zero";
            pendingOperator = null;
            runningTotal = 0;
            return;
        }
        else if(pendingOperator === '/'){
            runningTotal = runningTotal / currentNumber;
        }

        
    }
    pendingOperator = op;
    clearDisplay();
}

window.chooseOperator = chooseOperator;

function clearDisplay(){
    display.value = "";

}

window.clearDisplay = clearDisplay;

function calculate(){
    runningTotal = Number(runningTotal);
    currentNumber = Number(display.value);
    if(pendingOperator === '/' && display.value === '0'){
        display.value = "You can not divide by Zero";
        pendingOperator = null;
        runningTotal = 0;
        return;
    }
    if(pendingOperator === '+'){
        runningTotal = runningTotal + currentNumber;
    }
    else if(pendingOperator === '-'){
        runningTotal = runningTotal - currentNumber;
    }
    else if(pendingOperator === '*'){
        runningTotal = runningTotal * currentNumber;
    }
    else if(pendingOperator === '/'){
        runningTotal = runningTotal / currentNumber;
    }
    display.value = runningTotal;
    pendingOperator = null;

}

window.calculate = calculate;