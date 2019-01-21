

function multiplyBy()
{
// check the input
var first = document.getElementById("firstNumber").value;
var second = document.getElementById("secondNumber").value;
var answer = parseFloat(first) * parseFloat(second);
if(!isNaN(answer))
{
	document.getElementById("result").innerHTML=answer;
}
}

function divideBy(f,s)
{
// check the input
var first = document.getElementById("firstNumber").value;
var second = document.getElementById("secondNumber").value;
var answer = parseFloat(first) / parseFloat(second);
if(!isNaN(answer))
{
	document.getElementById("result").innerHTML=answer;
}

}

