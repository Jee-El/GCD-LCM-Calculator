// GCD stands for Greatest Common Divisor

/* Here modulo is defined as : a = r [b] <=> b / a - r . That's because the modulo operator in js acts differently; it *divides* a by b if the input is `a % b` then it returns the remainder.
Since dividing by 0 gets us nowhere, `a % 0` would return NaN. Meanwhile, if we follow the first definition, a = r [0] is true and makes sense,
although r would have to be equal to a. So I wrote an else..if statement to make a % 0 = |a|.
*/

// The forward slash means "divides".

const result = document.querySelector('p');
const input = document.querySelectorAll('input');
input[0].focus();
const submit = document.querySelector('button[type="submit"]');
const reset = document.querySelector('button[type="reset"]');

submit.addEventListener('click', () => {
    result.classList.remove('greyed-out');
    if (input[0].value.trim() === '' || input[1].value.trim() === '') {
        return result.textContent = `Please fill both the integer fields`;
    }
    checkForSafeNonNullInteger(+input[0].value, +input[1].value);
});

reset.addEventListener('click', () => {
    input[0].value = '';
    input[1].value = '';
    result.textContent = 'The GCD will be shown here!';
    result.classList.add('greyed-out');
})

function checkForSafeNonNullInteger(a, b) {
    // Check if a & b are integers, both not null.
    if ( !Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
        return result.textContent = `Input must be two integers, each between -(2^53 - 1) and (2^53 - 1)`;
    }
    if ( a === 0 && b === 0) {
        return result.textContent = `At least one integer should be non-null`;
    }

    return findGCD(a, b);
}

function findGCD(a, b) {
    // 0 % b = 0 but the absolute value of b is the GCD.
    if (a === 0) return result.textContent = b > 0 ? b : -b;

    // Check the second comment above for an explanation of this one.
    if (b === 0) return findGCD(b, a);

    // To end Euclide's algorithm.
    if (a % b === 0) {
        return result.textContent = Math.abs(a) > Math.abs(b) ? Math.abs(b) : Math.abs(a);
    }
    
    return findGCD(b, a % b);
}