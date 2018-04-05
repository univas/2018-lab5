function start() {
    var btn = document.getElementById('btnSum');
    if (btn != null) {
        btn.onclick = function() {
            sum();
        };
    }
}

function sum() {
    var inputA = document.getElementById('numberA');
    var inputB = document.getElementById('numberB');
    var inputC = document.getElementById('numberC');
    var operator = document.getElementById('operator');

    var a = parseInt(inputA.value, 10);
    var b = parseInt(inputB.value, 10);
    if (isNaN(a) || isNaN(b)) {
        alert('Digite um numero válido');
    } else {
        var c = 0;
        if (operator.value == '+') {
            c = a + b;
        } else if (operator.value == '-') {
            c = a - b;
        } else if (operator.value == '*') {
            c = a * b;
        } else if (operator.value == '/') {
            c = a / b;
        }

        inputC.value = c;
    }
}

window.onload = function() {
    start();
};