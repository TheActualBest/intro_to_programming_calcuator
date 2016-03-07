var handleClick = function(event){
	console.log(window.event);
	var choice = window.event.target.id;
	var number1 = document.getElementById("firstnum").value;
	var number2 = document.getElementById("secondnum").value;
	var parsednumber1 = parseFloat(number1);
	var parsednumber2 = parseFloat(number2);
	var answer;
	var operation;

	if(choice == "addition"){
		operation = " + ";
	 answer = parsednumber1 + parsednumber2;		
	} else if(choice == "subtraction"){
		operation = " - ";
	answer = parsednumber1 - parsednumber2;		
	} else if(choice == "multiplication"){
		operation = " * ";
	 answer = parsednumber1 * parsednumber2;
	} else if(choice == "division"){
		operation = " / ";
	 answer = parsednumber1 / parsednumber2;
	}
	
	var answersArea = document.getElementById("answers");
	var answerOutput;
	answersArea.innerHTML = number1 + operation + number2 + " = " + answer;
	
}