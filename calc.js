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
			case '*':
				result = this.mul(a, b);
				break;
			case '/':
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
		exprDisplay.innerHTML = `${exprDisplay.innerHTML} ${numButtons[i].innerHTML}`;
	});
}

let opButtons = document.getElementsByClassName('opButton');

for(let i=0; i<opButtons.length; i++) {
	opButtons[i].addEventListener('click', (e) => {
		let exprDisplay = document.querySelector('#exprDisplay');
		if(opButtons[i].innerHTML === 'AC') {
			exprDisplay.innerHTML = '';
		}else {
			exprDisplay.innerHTML = `${exprDisplay.innerHTML} ${opButtons[i].innerHTML}`;
		}
	});
}
