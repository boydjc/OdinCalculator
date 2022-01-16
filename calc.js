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
				result = this.div(a, b);
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
		if(opButtons[i].innerHTML === 'AC') {
			exprDisplay.innerHTML = '';
			resultDisplay.innerHTML = '';
		}else if(opButtons[i].innerHTML === 'C') {
			exprDisplay.innerHTML = exprDisplay.innerHTML.slice(0, -1);
		}else {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML}${opButtons[i].innerHTML}`;
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
