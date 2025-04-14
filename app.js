var inputElement = document.getElementById('input1');

function powerFunc(){
    var powerButton = document.getElementById('powerBtn');
    
    if( powerButton.innerText === "OFF"){
        powerButton.innerText = "ON";
        inputElement.value = 0;

        
        
        
    }
    else if( powerButton.innerText === "ON"){
        powerButton.innerText = "OFF";
        inputElement.value = "";
    }
}

if(powerButton.innerText === "OFF"){
    inputElement.value = ""
}

function calBtn(value) {
    if (inputElement.value === "0") {
        inputElement.value = "";
    }
    inputElement.value += value;
}

function square(){
    inputElement.value = inputElement.value * inputElement.value;
}

function perform(){
    inputElement.value = eval(inputElement.value)
}