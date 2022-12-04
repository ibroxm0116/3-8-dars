var elForm = document.querySelector('.jsform')
var elInput = document.querySelector('.jsinput')

var elResult1 = document.querySelector('.result1')
var elResult2 = document.querySelector('.result2')
var elResult3 = document.querySelector('.result3')
var elResult4 = document.querySelector('.result4')




function check(a, b) {
    return a / b;
}


function piyoda(evt) {
    evt.preventDefault();

    var elInputVal = +elInput.value;

    elResult1.textContent = check(elInputVal, 3.6).toFixed(0);
}

function velosiped(evt) {
    evt.preventDefault();

    var elInputVal = +elInput.value;

    elResult2.textContent = check(elInputVal, 20.1).toFixed(0);
}

function moshina(evt) {
    evt.preventDefault();

    var elInputVal = +elInput.value;

    elResult3.textContent = check(elInputVal, 70).toFixed(0);
}

function samolyot(evt) {
    evt.preventDefault();

    var elInputVal = +elInput.value;

    elResult4.textContent = check(elInputVal, 800).toFixed(0);
}


elForm.addEventListener("submit", piyoda)
elForm.addEventListener("submit", velosiped)
elForm.addEventListener("submit", moshina)
elForm.addEventListener("submit", samolyot)