/*
	James Hoover
	jameshooverdesign.com
*/

// Set colors on load
$(document).ready(function(){
	randomize();
});

// Radomize text/bg colors
function randomize() {
	var x = document.getElementById('colored__text');
	if (x !== null) { //Stop its from running on non homepage
		// document.getElementById('colored__text').style.color = randomColors();
		document.getElementById('colored__bg').style.backgroundColor = randomColors();
	}
}
// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}