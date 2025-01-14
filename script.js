// import {without} from lodash 

// console.log(without);

var _ = require('lodash'); 

const array = [1,2,3,4,5,6,7]; 
console.log('answer: ', _.without(array, 3)); 


let css = document.querySelector('h3'); 

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2'); 
let body = document.getElementById('gradient'); 
let ctxt1 = document.getElementById('crtxt1');
let ctxt2 = document.getElementById('crtxt2');
let button = document.getElementById('random'); 


function setGradient(){
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")"; 

	css.innerHTML = "background: " + body.style.background + ';'; 
	ctxt1.textContent= 'COLOR I:' + color1.value;
	ctxt2.textContent= 'COLOR II:' + color2.value;

}


function generateRandomColor() {
var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

function setRandomGradient(){
	color1.value = generateRandomColor(); 
	color2.value = generateRandomColor(); 
	setGradient(); 
}

color1.addEventListener('input', setGradient); 

color2.addEventListener('input', setGradient); 

button.addEventListener('click', setRandomGradient); 