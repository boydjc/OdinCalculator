const calculator = {
	add: function(a, b) {
		return a + b;
	},

	sub: function(a, b) {
		return a - b;
	},

	mul: function(a, b) {
		return a * b;
	},

	div: function(a, b) {
		return a / b;
	},

	operate: function(op, a, b) {
		
		let result;

		switch(op) {
			case '+':
				result = this.add(a, b);
				break;
			case '-':
				result = this.sub(a, b);
				break;
			case 'x':
				result = this.mul(a, b);
				break;
			case String.fromCharCode(247):
				if(b === 0) {
					result = "Cannot divide by 0!";
				}else{
					result = this.div(a, b);
				}
				break;
			default:
				break;
		}

		return result;
	},
};


// action listeners for calculator buttons

let numButtons = document.getElementsByClassName('calButton');

for(let i=0; i<numButtons.length; i++) {
	numButtons[i].addEventListener('click', (e) => {
		let exprDisplay = document.querySelector('#exprDisplay');
		exprDisplay.innerHTML = `${exprDisplay.innerHTML}${numButtons[i].innerHTML}`;
	});
}

let opButtons = document.getElementsByClassName('opButton');

for(let i=0; i<opButtons.length; i++) {
	opButtons[i].addEventListener('click', (e) => {
		let exprDisplay = document.querySelector('#exprDisplay');
		let resultDisplay = document.querySelector('#resultDisplay');
		let expressArr = [];

		if(opButtons[i].innerHTML === 'AC') {

			exprDisplay.innerHTML = '';
			resultDisplay.innerHTML = '';
			
		}else if(opButtons[i].innerHTML === 'C') {

			exprDisplay.innerHTML = exprDisplay.innerHTML.slice(0, -1);

		}else if(opButtons[i].innerHTML === '+') {

			let exprDisplayValue = exprDisplay.innerHTML;

			// get what's in the expression field and if there's already in two numbers 
			// then we have a chain expression and we need to evaluate the current 
			// expression before adding more numbers
			
			// remove the equal sign if there is one after an evaluation
			exprDisplayValue = exprDisplayValue.replace('=', '');

			if(exprDisplayValue.includes('+')) {
				expressArr = exprDisplayValue.trim().split('+');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('+', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}+`;

				}

			}else if(exprDisplayValue.includes('-')) {
				expressArr = exprDisplayValue.trim().split('-');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('-', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}+`;

				}

			}else if(exprDisplayValue.includes('x')) {
				expressArr = exprDisplayValue.trim().split('x');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('x', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}+`;

				}

			}else if(exprDisplayValue.includes(String.fromCharCode(247))) {
				expressArr = exprDisplayValue.trim().split(String.fromCharCode(247));

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate(String.fromCharCode(247), parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}+`;

				}

			}else {

					exprDisplay.innerHTML = `${exprDisplayValue}${opButtons[i].innerHTML}`;

			}	

		}else if(opButtons[i].innerHTML === '-') {

			let exprDisplayValue = exprDisplay.innerHTML;

			// get what's in the expression field and if there's already in two numbers 
			// then we have a chain expression and we need to evaluate the current 
			// expression before adding more numbers
			
			// remove the equal sign if there is one after an evaluation
			exprDisplayValue = exprDisplayValue.replace('=', '');

			if(exprDisplayValue.includes('+')) {
				expressArr = exprDisplayValue.trim().split('+');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('+', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}-`;

				}

			}else if(exprDisplayValue.includes('-')) {
				expressArr = exprDisplayValue.trim().split('-');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('-', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}-`;

				}

			}else if(exprDisplayValue.includes('x')) {
				expressArr = exprDisplayValue.trim().split('x');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('x', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}-`;

				}

			}else if(exprDisplayValue.includes(String.fromCharCode(247))) {
				expressArr = exprDisplayValue.trim().split(String.fromCharCode(247));

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate(String.fromCharCode(247), parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}-`;

				}

			}else {

					exprDisplay.innerHTML = `${exprDisplayValue}${opButtons[i].innerHTML}`;

			}	


		}else if(opButtons[i].innerHTML === 'x') {

			let exprDisplayValue = exprDisplay.innerHTML;

			// get what's in the expression field and if there's already in two numbers 
			// then we have a chain expression and we need to evaluate the current 
			// expression before adding more numbers
			
			// remove the equal sign if there is one after an evaluation
			exprDisplayValue = exprDisplayValue.replace('=', '');

			if(exprDisplayValue.includes('+')) {
				expressArr = exprDisplayValue.trim().split('+');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('+', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}x`;

				}

			}else if(exprDisplayValue.includes('-')) {
				expressArr = exprDisplayValue.trim().split('-');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('-', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}x`;

				}

			}else if(exprDisplayValue.includes('x')) {
				expressArr = exprDisplayValue.trim().split('x');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('x', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}x`;

				}

			}else if(exprDisplayValue.includes(String.fromCharCode(247))) {
				expressArr = exprDisplayValue.trim().split(String.fromCharCode(247));

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate(String.fromCharCode(247), parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}x`;

				}

			}else {

					exprDisplay.innerHTML = `${exprDisplayValue}${opButtons[i].innerHTML}`;

			}	

		}else if(opButtons[i].innerHTML === String.fromCharCode(247)) {
			
			let exprDisplayValue = exprDisplay.innerHTML;

			// get what's in the expression field and if there's already in two numbers 
			// then we have a chain expression and we need to evaluate the current 
			// expression before adding more numbers
			
			// remove the equal sign if there is one after an evaluation
			exprDisplayValue = exprDisplayValue.replace('=', '');

			if(exprDisplayValue.includes('+')) {
				expressArr = exprDisplayValue.trim().split('+');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('+', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}${String.fromCharCode(247)}`;

				}

			}else if(exprDisplayValue.includes('-')) {
				expressArr = exprDisplayValue.trim().split('-');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('-', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}${String.fromCharCode(247)}`;

				}

			}else if(exprDisplayValue.includes('x')) {
				expressArr = exprDisplayValue.trim().split('x');

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate('x', parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}${String.fromCharCode(247)}`;

				}

			}else if(exprDisplayValue.includes(String.fromCharCode(247))) {
				expressArr = exprDisplayValue.trim().split(String.fromCharCode(247));

				if(expressArr.length === 2) {

					// evaluate the current expression and put it in the expression display as the first number
					let result = calculator.operate(String.fromCharCode(247), parseInt(expressArr[0]), parseInt(expressArr[1]));

					exprDisplay.innerHTML = `${result}${String.fromCharCode(247)}`;

				}

			}else {

					exprDisplay.innerHTML = `${exprDisplayValue}${opButtons[i].innerHTML}`;

			}

		}
	});
}

let equalButton = document.querySelector('#equalButton');
equalButton.addEventListener('click', (e) => {
	let exprDisplay = document.querySelector('#exprDisplay');
	let resultDisplay = document.querySelector('#resultDisplay');
	let expressArr;
	let result;

	if(exprDisplay.innerHTML.includes('+')) {

		expressArr = exprDisplay.innerHTML.trim().split('+');
		if(expressArr.length === 2) {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML}=`;
		}
		result = calculator.operate('+', parseInt(expressArr[0]), parseInt(expressArr[1]));

	}else if(exprDisplay.innerHTML.includes('-')) {

		expressArr = exprDisplay.innerHTML.trim().split('-');
		if(expressArr.length === 2) {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML}=`;
		}
		result = calculator.operate('-', parseInt(expressArr[0]), parseInt(expressArr[1]));

	}else if(exprDisplay.innerHTML.includes('x')) {

		expressArr = exprDisplay.innerHTML.trim().split('x');
		if(expressArr.length === 2) {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML}=`;
		}
		result = calculator.operate('x', parseInt(expressArr[0]), parseInt(expressArr[1]));

	}else if(exprDisplay.innerHTML.includes(String.fromCharCode(247))) {

		expressArr = exprDisplay.innerHTML.trim().split(String.fromCharCode(247));
		if(expressArr.length === 2) {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML}=`;
		}
		result = calculator.operate(String.fromCharCode(247), 
									parseInt(expressArr[0]), parseInt(expressArr[1]));

	}

	resultDisplay.innerHTML = result;
});
