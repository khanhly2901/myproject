"use strict";
var targetNumber = Math.floor(Math.random() * 10) + 1;
var count = 0;
const number = document.querySelector('.number');
function init () {
	console.log("You have to code this!");
}

function check()
{
	var win = false;
	while (parseFloat(count) <= parseFloat(5) && win == false)
  {
  	count = parseFloat(count)+1;
		if (parseFloat(number)==parseFloat(targetNumber))
  	{
  		win = true;
		} else
		{
			showError();
		}
	}
	if(win == true)
	{
		showWin();
	}else{
	showLoss();
	}
}

function showWin () {
  console.log("You won!");
  console.log(targetNumber);
}

function showError () {
  console.log("Error");
  console.log(targetNumber);
}

function showLoss () {
	console.log(targetNumber);
	console.log("You lose!");
}