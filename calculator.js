// Calculator Program
// 4 Operations addition, subtraction,
// multiplication, and division
// You will need a function for each one
// You need a menu so user can select an
// operation
// input

//var choice = prompt("What operation", "addition");
var handleClick = function(event){
	console.log(window.event);
	var choice = window.event.target.id;

	if(choice == "addition"){
		var number1 = prompt("Enter First number",0);
		var number2 = prompt("Enter Second number",0);
		var parsednumber1 = parseFloat(number1);
		var parsednumber2 = parseFloat(number2);
		var answer = parsednumber1 + parsednumber2;
		// Write info to the screen
		//alert("the answer is " + answer);
		document.write("the answer is " + answer);
		consol.log("the answer is " + answer);
	}else if(choice == "subtraction"){
	var number1 = prompt("Enter First number",0);
		var number2 = prompt("Enter Second number",0);
		var parsednumber1 = parseFloat(number1);
		var parsednumber2 = parseFloat(number2);
		var answer = parsednumber1 - parsednumber2;
		// Write info to the screen
		//alert("the answer is " + answer);
		document.write("the answer is " + answer);	
	}else if(choice == "multiplication"){
	var number1 = prompt("Enter First number",0);
		var number2 = prompt("Enter Second number",0);
		var parsednumber1 = parseFloat(number1);
		var parsednumber2 = parseFloat(number2);
		var answer = parsednumber1 * parsednumber2;
		// Write info to the screen
		//alert("the answer is " + answer);
		document.write("the answer is " + answer);
		consol.log("the answer is " + answer);
	}else if(choice == "division"){
	var number1 = prompt("Enter First number",0);
		var number2 = prompt("Enter Second number",0);
		var parsednumber1 = parseFloat(number1);
		var parsednumber2 = parseFloat(number2);
		var answer = parsednumber1 / parsednumber2;
		// Write info to the screen
		//alert("the answer is " + answer);
		document.write("the answer is " + answer);
		consol.log("the answer is " + answer);}