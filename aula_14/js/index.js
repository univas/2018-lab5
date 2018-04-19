listenerButton();

function listenerButton() {
    var btnAdd = document.getElementById('addBtn');
    btnAdd.onclick = function() {
        start();
    };
}

function start() {
    var inputName = document.getElementById('name');
    var inputCPF = document.getElementById('cpf');
    var inputEmail = document.getElementById('email');

    if (validateField(inputName) && validateField(inputCPF) 
        && validateField(inputEmail)) {
        
        saveAluno(inputName, inputCPF, inputEmail);
        clearFields(inputName, inputCPF, inputEmail);

    } else {
        alert('Por favor, digite todos os campos!');
    }
}

function validateField(input) {
    return input.value.trim() != "";
}

function saveAluno(inputName, inputCPF, inputEmail) {
    var tr = createLine();
    var tdName = createTableData(inputName.value);
    var tdCPF = createTableData(inputCPF.value);
    var tdEmail = createTableData(inputEmail.value);

    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdCPF);

    addTableLine(tr);
}

function createLine() {
    var tr = document.createElement('tr');
    return tr;
}

function createTableData(content) {
    var td = document.createElement('td');
    td.innerHTML = content;
    return td;
}

function addTableLine(tr) {
    var table = document.getElementById('tblAlunos');
    table.appendChild(tr);
}

function clearFields(inputName, inputCPF, inputEmail) {
    inputName.value = "";
    inputCPF.value = "";
    inputEmail.value = "";
    inputName.focus();
}