start();

function start() {
    var btnApply = document.getElementById('btnApply');
    btnApply.onclick = function() {
        changeStyle();
    };
}

function changeStyle() {
    var colorInput = document.getElementById('color');
    var widthInput = document.getElementById('width');
    var heightInput = document.getElementById('height');

    var div = document.getElementById('myDiv');
    div.style.color = colorInput.value;
    div.style.width = widthInput.value + 'px';
    div.style.height = heightInput.value + 'px';
}