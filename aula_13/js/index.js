start();

function start() {
    var btn = document.getElementById('addBtn');
    btn.onclick = function() {
        var inputName = document.getElementById('name');
        if (validateName(inputName)) {
            addItemList(inputName);
        } else {
            alert('Por favor, digite o nome!');
        }
        clearInput(inputName);
    };
}

function validateName(inputName) {
    return inputName.value.trim() != '';
}

function addItemList(inputName) {
    var newListItem = createItemList(inputName.value);

    var list = document.getElementById('contactList');
    list.appendChild(newListItem);
}

function createItemList(content) {
    var newItemList = document.createElement('li');
    newItemList.innerHTML = content;
    return newItemList;
}

function clearInput(inputName) {
    inputName.value = '';
    inputName.focus();
}


/*
12-04
Diego Fraga
2 Bruno
Rafael
Franz
Rangel
Rafaela
Sulivan
Ewerton
Samuel
Jonathan
Diego Nogueira
Diego Alves
Ingrid

*/