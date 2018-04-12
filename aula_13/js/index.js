start();

function start() {
    var btn = document.getElementById('addBtn');
    btn.onclick = function() {
        addItemList();
    };
}

function addItemList() {
    var inputName = document.getElementById('name');
    var newListItem = document.createElement('li');
    newListItem.innerHTML = inputName.value;

    var list = document.getElementById('contactList');
    list.appendChild(newListItem);
}