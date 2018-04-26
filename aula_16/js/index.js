start();

function start() {
    var button = document.getElementById('btnAdd');
    button.onclick = function() {
        addContact();
    };
}

function addContact() {
    var inputName = document.getElementById('name');
    var inputCPF = document.getElementById('cpf');
    var inputEmail = document.getElementById('email');

    if (isValidField(inputName) && 
        isValidField(inputCPF) &&
        isValidField(inputEmail)) {
        createContact(inputName, inputCPF, inputEmail);
        clearFields(inputName, inputCPF, inputEmail);
    } else {
        alert('Preencha todos os campos!');
    }
}

function isValidField(field) {
    return field.value.trim() != '';
}

function createContact(inputName, inputCPF, inputEmail) {
    var tr = createLine();
    var tdName = createTableData(inputName.value);
    var tdCPF = createTableData(inputCPF.value);
    var tdEmail = createTableData(inputEmail.value);
    var tdExcluir = createTableData('');
    tdExcluir.appendChild(createButtonElement());

    tr.appendChild(tdName);
    tr.appendChild(tdCPF);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);

    var table = document.getElementById('tableItems');
    table.appendChild(tr);
}

function createButtonElement() {
    var button = document.createElement('input');
    button.value = 'Excluir';
    button.onclick = deleteContact;
    button.type = 'button';
    return button; 
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

function clearFields(inputName, inputCPF, inputEmail) {
    inputName.value = '';
    inputCPF.value = '';
    inputEmail.value = '';
    inputName.focus();
}

function deleteContact() {
    var td = this.parentNode;
    var tr = td.parentNode;
    var table = document.getElementById('tableItems');
    table.removeChild(tr);
}