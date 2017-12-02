
// Task 1

var task1 = document.getElementById('task1');
var block1 = document.getElementById('block1');

block1.onmousemove = function(event){
	event.X = event.clientX 
	event.Y = event.clientY;
	task1.innerHTML = 'Координаты X - ' + event.X + ' '+ 'Координаты Y - '+ event.Y;
}

// Task 2

var task2 = document.getElementById('task2');
var change;
task2.ondblclick = function(){
	
	var filesImg = document.getElementById('files_img');
	if (change){
		filesImg.src = "img/close.jpg";
		console.log(filesImg);
	} else{
		filesImg.src = "img/open.jpg";
		console.log(filesImg);
	}

	change = !change;
}


// Task 3

var block3 = document.querySelector('#block3');
var div = document.createElement('div');

function getBlocks(){
	for (var i = 1; i<300; i++){
		var divs = div.cloneNode(true);
		divs.className = 'block3';
		
		block3.appendChild(divs);

			divs.onmouseenter = function(){
			this.style.borderRadius = '20px';
			}
	}

}

getBlocks();


// Task 4

var block4 = document.querySelector('.block4');
var bigImg= document.querySelector('.bigImg');

function changeImg(event){
	
	var target = event.target;
	if (target.tagName!='IMG'){
		return;
	} else {
		var source = target.getAttribute('src');
		bigImg.style.backgroundSize = 'contain';
		bigImg.style.backgroundImage = 'url(' + source +')';
	}
}

block4.addEventListener('click', changeImg);

// Task 5

var div5 = document.getElementById('div5');
var bottom = 0;

function changePosition(event){
	
	var block5 = document.getElementById('task5');
	bottom = bottom - 100;
	
	if (bottom < -400){
		bottom = 0;
		block5.style.bottom = bottom + 'px';
	} else{
		block5.style.bottom = bottom + 'px';
	}
}

div5.addEventListener('click', changePosition);

// Task 6


var task6 = document.getElementById('task6');

	var count = 1;
	var bottom = 0;
	var right = 0;
	

task6.onclick = function (){
	var block6 = document.getElementById('block6');
	
	if (count <= 2){
		bottom = bottom  - 100;
		right = right -100;
		block6.style.bottom = bottom + 'px';
		block6.style.right = right + 'px';
		console.log(count);	
		
	} else if (count>2){
		bottom = 0;
		right = 0;
		count = 0;
		block6.style.bottom = bottom + 'px';
		block6.style.right = right + 'px';
		console.log(count);	
	}
	count += 1;
}


