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

// Get GCD when GCD button is clicked
GCDBtn.addEventListener('click', (e) => {
	result.classList.remove('greyed-out');
	if (input[0].value.trim() === '' || input[1].value.trim() === '') {
		return (result.textContent = `Please fill both the integer fields`);
	}
	a = +input[0].value;
	b = +input[1].value;
	checkForValidInput(a, b, e);
});

// Get LCM when LCM button is clicked
LCMBtn.addEventListener('click', (e) => {
	result.classList.remove('greyed-out');
	if (input[0].value.trim() === '' || input[1].value.trim() === '') {
		return (result.textContent = `Please fill both the integer fields`);
	}
	a = +input[0].value;
	b = +input[1].value;
	checkForValidInput(a, b, e);
});

// Clear input
resetBtn.addEventListener('click', () => {
	input[0].value = '';
	input[1].value = '';
	result.textContent = 'The GCD/LCM is shown here!';
	result.classList.add('greyed-out');
});

// check input, then call the function tied to the clicked button
function checkForValidInput(a, b, e) {
	// Check if a & b are integers, both not null.
	if (
		!Number.isInteger(a) ||
		!Number.isInteger(b) ||
		a.toString().split('').length > 12 ||
		b.toString().split('').length > 12
	) {
		return (result.textContent = `Entered numbers must be made of 12 digits or less.`);
	}
	if (a === 0 && b === 0) {
		return (result.textContent = `At least one integer should be non-null`);
	}
	if (e.target.classList.contains('GCD-button')) return findGCD(a, b);
	if (e.target.classList.contains('LCM-button')) return findLCM(a, b);
}

function findGCD(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	// 0 % b = 0 but the absolute value of b is the GCD.
	if (a === 0) return (result.textContent = b);

	// Check the second comment above for an explanation of this one.
	if (b === 0) return findGCD(b, a);

	// To end Euclide's algorithm.
	if (a % b === 0) {
		return (result.textContent = a > b ? b : a);
	}

	return findGCD(b, a % b);
}

function findLCM(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	let GCD = findGCD(a, b);
	return (result.textContent = (a * b) / GCD);
}
