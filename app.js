var inputElement = document.getElementById('input1');
var calculation = false;

function powerFunc(){
    var powerButton = document.getElementById('powerBtn');
    
    if( powerButton.innerText === "OFF"){
        powerButton.innerText = "ON";
        calculation = true;
        inputElement.value = 0;
       
    }
    else if( powerButton.innerText === "ON"){
        powerButton.innerText = "OFF";
        calculation = false;
        inputElement.value = "";
    
    }
}



function calBtn(value) {
    if (!calculation) return;
    if (inputElement.value === "0") {
        inputElement.value = "";
    }
    inputElement.value += value;
}

function square(){
    if (!calculation) return;
    inputElement.value = inputElement.value * inputElement.value;
}

function root(){
    if (!calculation) return;
    inputElement.value = Math.sqrt(inputElement.value);
}

function perform(){
    if (!calculation) return;
    inputElement.value = eval(inputElement.value)
}