var factor = 5;
start();

function start() {
    var btn = document.getElementById('btnStart');
    btn.onclick = function() {
        setInterval(function() {
            moveImage();
        }, 50);
        btn.disabled = true;

        setTimeout(timeoutTest, 2000);
    };
}

function timeoutTest() {
    console.log(new Date());
}

function moveImage() {
    var image = document.getElementById('imgBrazil');
    var currentMarging = image.style.marginLeft.replace("px", "");
    
    if (currentMarging == "") {
        currentMarging = 0;
    } else {
        currentMarging = parseInt(currentMarging, 10);
    }

    if (currentMarging == 1000) {
        factor = -5;
    } else if (currentMarging == 0) {
        factor = 5;
    }

    currentMarging += factor;
    image.style.marginLeft = currentMarging + 'px';

}