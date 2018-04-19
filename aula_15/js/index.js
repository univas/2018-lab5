start();

function start() {
    var button = document.getElementById('btnAdd');
    button.onclick = function() {
        addParagraphs();
    };
}

function addParagraphs() {
    var inputQuantity = document.getElementById('quantity');
    var inputContent = document.getElementById('content');

    if (validateField(inputQuantity) &&
     validateField(inputContent)) {
        createParagraphs(inputQuantity, inputContent);
        clearFields(inputQuantity, inputContent);
     } else {
         alert('Digite todos os campos!');
     }
}

function validateField(input) {
    return input.value.trim() != '';
}

function createParagraphs(inputQuantity, inputContent) {
    var max = parseInt(inputQuantity.value, 10);

    for (var i = 0; i < max; i++) {
        var p = document.createElement('p');
        p.onclick = removeElement;
        p.innerHTML = inputContent.value;
        document.body.appendChild(p);
    }
}

function clearFields(inputQuantity, inputContent) {
    inputQuantity.value = "";
    inputContent.value = "";
    inputQuantity.focus();
}

function removeElement() {
    document.body.removeChild(this);
}

