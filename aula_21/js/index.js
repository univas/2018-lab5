bills = [];
start();
loadFromLocalStorage();

function start() {
    var save = document.getElementById('saveButton');
    save.onclick = function() {
        addBill();
    };
}

function addBill() {
    var inputDescription = document.getElementById('description');
    var inputReceive = document.getElementById('receive');
    var inputDate = document.getElementById('date');
    var inputValue = document.getElementById('value');

    if (isEmptyField(inputDescription) ||
        isEmptyField(inputDate) ||
        isEmptyField(inputValue)
        ) {
        alert('Preencha todos os campos!');
    } else {
        bills.push(createBillObj(inputDescription,
            inputReceive, inputDate, inputValue));
        populateTable();
        clearFields(inputDescription,
            inputReceive, inputDate, inputValue);
        saveLocalStorage();
    }
}

function isEmptyField(input) {
    return input.value.trim() == '';
}

function createBillObj(inputDescription, inputReceive,
                        inputDate, inputValue) {
    var obj = {
        description: inputDescription.value,
        type: inputReceive.checked ? 'Receber' : 'Pagar',
        date: inputDate.value,
        value: inputValue.value
    };

    return obj;
}

function clearFields(inputDescription,
            inputReceive, inputDate, inputValue) {
    inputDescription.value = '';
    inputDescription.focus();
    inputReceive.checked = true;
    inputDate.value = '';
    inputValue.value = '';
}

function populateTable() {
    var table = document.getElementById('account_table');
    clearTable(table);
    var balance = 0;

    for (var i = 0; i < bills.length; i++) {
        var bill = bills[i];
        balance += getValue(bill);

        var tr = document.createElement('tr');
        appendTd(tr, bill.description);
        appendTd(tr, bill.type);
        appendTd(tr, bill.date);
        appendTd(tr, bill.value);
        table.tBodies[0].appendChild(tr);
    }

    document.getElementById('balance').innerHTML = 'R$ ' + balance;
}

function clearTable(table) {
    table.tBodies[0].innerHTML = '';
}

function appendTd(tr, content) {
    var td = document.createElement('td');
    td.innerHTML = content;
    tr.appendChild(td);
}

function getValue(bill) {
    var value = parseFloat(bill.value);
    if (bill.type == 'Pagar') {
        value = value * -1;
    }
    return value;
}

function saveLocalStorage() {
    var strBills = JSON.stringify(bills);
    localStorage.setItem('bills', strBills);
}

function loadFromLocalStorage() {
    var strBills = localStorage.getItem('bills');
    if (strBills) {
        bills = JSON.parse(strBills);
        populateTable();
    }
}