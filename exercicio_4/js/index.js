//global variables
var imageName = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png', 'seven.png', 'eight.png', 'nine.png'];
var divImages = [];
var numberOfRetries = 0;
var numberOfAllRetries = 0;
var countHits = 0;
var ultimaImagem = null;
var penultimaImagem = null;

start();

function start() {
	var start_button = document.getElementById('start');
	start_button.onclick = startButtonEvent;
}

function startButtonEvent() {
	divImages.length = 0;
	numberOfRetries = 0;
	numberOfAllRetries = 0;
	countHits = 0;
	ultimaImagem = null;
	penultimaImagem = null;
	
	generateRandomImages();
	var divContainer = getDivContainer();
	clearDivElementContent(divContainer);
	createElements(divContainer);
}

function generateRandomImages() {
	var max = imageName.length;
	
	for (var i = 0; i < max; i++) {
		var imageSrc = "images/" + imageName[i];
		
		for (var j = 0; j < 2; j++) {
			while (true) {
				var index = Math.floor(Math.random() * 18);
				if (divImages[index] === undefined) {
					divImages[index] = imageSrc;
					break;
				}
			}
		}
	}
}

function createElements(divContainer) {
	for (var i = 0; i < 18; i++) {
		var div = createDivElement();
		var img = createImgElement(i);
		div.appendChild(img);
		divContainer.appendChild(div);
	}
}

function imageEventClick() {
	if (penultimaImagem == null || penultimaImagem.id != this.id) {
		var imageSrc = divImages[this.id];
		this.src = imageSrc;
		
		numberOfRetries++;
		if (numberOfRetries == 1) {
			penultimaImagem = this;
		
		} else if (numberOfRetries == 2) {
			ultimaImagem = this;
			
			validateImages();
			numberOfRetries = 0;
			numberOfAllRetries++;
		}
	}
}

function validateImages() {
	if (penultimaImagem.src !== ultimaImagem.src) {
		setTimeout(function() {
			alert('tente novamente');
			penultimaImagem.src = 'images/game.png';
			ultimaImagem.src = 'images/game.png';
			
			ultimaImagem = null;
			penultimaImagem = null;
			
		}, 400);
		
	} else {
		penultimaImagem.onclick = null;
		ultimaImagem.onclick = null;
		countHits++;
		
		if (countHits === imageName.length) {
			alert('Parabéns! Você conseguiu! Você precisou de ' + numberOfAllRetries + ' tentativas para alcançar o sucesso!');
		}
	}
}


function createDivElement() {
	var div = document.createElement('div');
	div.className = 'div-adj';
	return div;
}

function createImgElement(id) {
	var img = document.createElement('img');
	img.className = 'img-responsive';
	img.src = 'images/game.png';
	img.onclick = imageEventClick;
	img.id = id;
	return img;
}

function clearDivElementContent(div) {
	div.innerHTML = '';
}

function getDivContainer() {
	var div = document.getElementById('images-content');
	return div;
}