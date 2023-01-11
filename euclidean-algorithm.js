const output = document.querySelector('output');
const outputDefaultValue = 'The GCD/LCM is shown here!'
const inputs = Array.from(document.querySelectorAll('input'));
const GCDBtn = document.querySelector('.GCD-button');
const LCMBtn = document.querySelector('.LCM-button');
const resetBtn = document.querySelector('button[type="reset"]');

const emptyInputError = 'Please fill in the input fields'
const tooBigNumError = 'Input must be 12 digits or less'
const twoZerosError = 'One operand must be non-null'
const NotIntError = 'Inputs must be integers'

GCDBtn.addEventListener('click', () => {
	output.classList.remove('greyed-out')

	if (isInvalidOperands()) return

	operands = getOperands()

	output.textContent = findGCD(...operands)
})

LCMBtn.addEventListener('click', () => {
	output.classList.remove('greyed-out')

	if (isInvalidOperands()) return

	operands = getOperands()

	output.textContent = findLCM(...operands)
})

resetBtn.addEventListener('click', () => {
	inputs.forEach((input) => input.value = '')
	output.textContent = outputDefaultValue;
	output.classList.add('greyed-out');
});

function getOperands() {
	return inputs.map((input) => Math.abs(+input.value))
}

function removeSignChar(input) {
	return input.value.trim().replace(/^(\+|-)/, '')
}

function findGCD(a, b) {
	if (a === 0) return b;

	if (b === 0) return findGCD(b, a);

	if (a % b === 0) return Math.min(a, b);

	return findGCD(b, a % b);
}

function findLCM(a, b) { return (a * b) / findGCD(a, b); }

function isInvalidOperands() {
	inputs.forEach((input) => {
		input = removeSignChar(input)
		if (input === '') {
			output.textContent = emptyInputError
			return true
		} else if (input.length > 12) {
			output.textContent = tooBigNumError
			return true
		} else if (!Number.isInteger(+input)) {
			output.textContent = NotIntError
			return true
		}
	})

	if (inputs.every((input) => !+removeSignChar(input))) {
		output.textContent = twoZerosError
		return true
	}
}