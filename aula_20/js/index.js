var students = [];

loadDataFromLocalStorage();
saveButtonEvent();

function saveButtonEvent() {
    var saveButton = document.getElementById('save');
    saveButton.onclick = function() {
        saveStudent();
    };
}

function saveStudent() {
    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');
    var inputPhone = document.getElementById('phone');

    var student = {
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value
    };

    students.push(student);
    clearTable();
    populateTable();
    saveLocalStorage(); 
}

function clearTable() {
    var table = document.getElementById('students_table');
    var tBody = table.tBodies[0];

    for (var i = tBody.children.length; i > 0; i--) {
        var tr = tBody.children[i - 1];
        tBody.removeChild(tr);
    }
}

function populateTable() {
    var table = document.getElementById('students_table');

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdEmail = document.createElement('td');
        var tdPhone = document.createElement('td');

        tdName.innerHTML = student.name;
        tdEmail.innerHTML = student.email;
        tdPhone.innerHTML = student.phone;
        
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);

        table.tBodies[0].appendChild(tr);
    }
}

function saveLocalStorage() {
    var data = JSON.stringify(students);
    localStorage.setItem("estudantes", data);
}

function loadDataFromLocalStorage() {
    var studentsSaved = localStorage.getItem("estudantes");
    if (studentsSaved) {
        students = JSON.parse(studentsSaved);
        populateTable();
    }
}