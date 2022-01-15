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
