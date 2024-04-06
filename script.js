const display = document.getElementById('display');

function appendToDisplay (something){
display.innerText+= something;
// alert(something)
}

function clearDisplay(){
    display.innerText="";
}
function equalTo(){
    try {
    display.innerText = eval(display.innerText)

    } catch {
        display.innerText="SYNTAX ERROR"
        
    }
}