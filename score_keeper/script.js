var p1B =document.querySelector("#p1");
var p2B = document.getElementById("p2");
var resetBut = document.getElementById("reset");
var p1Score=0;
var p2Score=0;
var gameOver = false;
var winningScore = 5;
var numinp = document.querySelector("input");
var p1dis = document.querySelector("#p1display");
var p2dis = document.querySelector("#p2display");
var winningdis = document.querySelector("p span");

p1B.addEventListener("click",function() {
	if(!gameOver){
	p1Score++;
	if(p1Score === winningScore){
		p1dis.classList.add("winner");
		gameOver = true;

	}
	p1dis.textContent = p1Score;
	}
}) ;
p2B.addEventListener("click",function() {
	if(!gameOver){
	p2Score++;	
	}
	if(p2Score === winningScore){
		p1dis.classList.add("winner"); 
		gameOver = true;
	}
	p2dis.textContent = p2Score;
}) ;

resetBut.addEventListener("click",function(){
	reset();
});

function reset(){
	p2Score = 0;
	p1Score = 0;
	p1dis.textContent = 0;
	p2dis.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}
numinp.addEventListener("change",function(){
	winningdis.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});  
