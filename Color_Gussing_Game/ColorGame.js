
var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


init();

function init(){
	// mode buttons
	setUpModeButton();
	setUpSquares();
	reset();
}

function setUpModeButton(){
	for(var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 6;
		}else{
			numSquares = 9;
		}
		reset();
		})
	}

}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		// add click listener to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked squar
		var clickedColor = this.style.backgroundColor;

		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
}
	


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
    messageDisplay.textContent = " ";
	//loops through all squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"; 
		}
		
	}
	h1.style.backgroundColor = "steelblue";

}


// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}		
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){		
// 		   squares[i].style.backgroundColor = colors[i];		
// 		   squares[i].style.display = "block";				
// 	}
// })


resetButton.addEventListener("click", function(){
	//gererate all new colors
	reset();
})

// colorDisplay.textContent = pickedColor;



function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){

	// change each color to match given color
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num){
	// make an array
	var arr = []

	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a " red " from 0 -- 255
	var r = Math.floor(Math.random() * 256);

	// pick a " green " from 0 -- 255
	var g = Math.floor(Math.random() * 256);

	// pick a " blue " from 0 -- 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}








