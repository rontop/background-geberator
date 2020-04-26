var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
    // I don't know why after this is executed, 
    // css.textContent will replace the h3 content I wrote in html
}

function randomNumberForColor() {
	color1.value = "#"+Math.round(Math.random()*16777215).toString(16);
	color2.value = "#"+Math.round(Math.random()*16777215).toString(16);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click",randomNumberForColor);