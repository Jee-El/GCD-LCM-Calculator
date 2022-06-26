// GCD stands for Greatest Common Divisor

/* Here modulo is defined as : a = r [b] <=> b / a - r . That's because the modulo operator in js acts differently; it *divides* a by b if the input is `a % b` then it returns the remainder.
Since dividing by 0 gets us nowhere, `a % 0` would return NaN. Meanwhile, if we follow the first definition, a = r [0] is true and makes sense,
although r would have to be equal to a. So I wrote an else..if statement to make a % 0 = |a|.
*/

// The forward slash means "divides".

const result = document.querySelector('p');
const input = document.querySelectorAll('input');
const GCDBtn = document.querySelector('.GCD-button');
const LCMBtn = document.querySelector('.LCM-button');
const resetBtn = document.querySelector('button[type="reset"]');

let firstOperand = null;
let secondOperand = null;

// Get GCD when GCD button is clicked
GCDBtn.addEventListener('click', () => {
	isGCD = true;
	invalidInputError = checkInput();
	if (invalidInputError) {
		result.textContent = invalidInputError;
		return;
	}
	result.textContent = findGCD(firstOperand, secondOperand);
});

// Get LCM when LCM button is clicked
LCMBtn.addEventListener('click', () => {
	invalidInputError = checkInput();
	if (invalidInputError) {
		result.textContent = invalidInputError;
		return;
	}
	result.textContent = findLCM(firstOperand, secondOperand);
});

// Clear input.
resetBtn.addEventListener('click', () => {
	input[0].value = '';
	input[1].value = '';
	result.textContent = 'The GCD/LCM is shown here!';
	result.classList.add('greyed-out');
});

// check input, then call the function tied to the clicked button.
function checkInput() {
	result.classList.remove('greyed-out');

	firstOperand = input[0].value;
	secondOperand = input[0].value;
	// Empty fields
	if (input[0].value.trim() === '' || input[1].value.trim() === '') {
		return `Integer fields must be filled`;
	}

	firstOperand = Math.abs(+input[0].value);
	secondOperand = Math.abs(+input[1].value);
	// Check if a & b are integers, both not null.
	if (
		!Number.isInteger(firstOperand) ||
		!Number.isInteger(secondOperand) ||
		firstOperand.toString().length > 12 ||
		secondOperand.toString().length > 12
	) {
		return `Input must be 12 digits or less.`;
	}
	if (isGCD && firstOperand === 0 && secondOperand === 0) {
		return `One integer must be non-null`;
	}
}

function findGCD(a, b) {
	// 0 % b = 0 but the absolute value of b is the GCD.
	if (a === 0) return b;

	// Check the second comment above for an explanation of this one.
	if (b === 0) return findGCD(b, a);

	// To end Euclide's algorithm.
	if (a % b === 0) return Math.min(a, b);

	return findGCD(b, a % b);
}

function findLCM(a, b) {
	if (a === 0 || b === 0) return 0;
	let GCD = findGCD(a, b);
	return (a * b) / GCD;
}
