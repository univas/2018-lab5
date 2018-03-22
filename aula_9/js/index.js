start();

function start() {
    var btnTest = document.getElementById('btn_test');
    if (btnTest != null) {
        console.log(btnTest.value);
        console.log(btnTest);
    }

    var inputA = document.getElementById('number_a');
    inputA.value = 25;
    listenerButton(btnTest);
}

function listenerButton(btnTest) {
    btnTest.onclick = function() {
        console.log('DEU CERTO!!!');
    };
}