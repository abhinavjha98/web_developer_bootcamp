var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor);
	console.log(pickedColor);
	if (clickedColor === pickedColor) {
		messageDisplay.textContent ="Correct";
		changeColors( clickedColor);

	}else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent ="Try Again";
	}
});
	
}  

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i =0; i< num;i++){

	}
	return arr;
}

function randomColor(){
	 
}