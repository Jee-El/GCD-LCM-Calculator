// GCD stands for Greatest Common Divisor

/* Here modulo is defined as : a = r [b] <=> b / a - r . That's because the modulo operator in js acts differently; it *divides* a by b if the input is `a % b` then it returns the remainder.
Since dividing by 0 gets us nowhere, `a % 0` would return NaN. Meanwhile, if we follow the first definition, a = r [0] is true and makes sense,
although r would have to be equal to a. So I wrote an else..if statement to make a % 0 = |a|.
*/

// The forward slash means "divides".

const result = document.querySelector('p');
const submit = document.querySelector('.submit.button');
const reset = document.querySelector('.reset.button')

submit.addEventListener('click', () => {
    const firstInput = document.getElementById('firstInput').value;
    const secondInput = document.getElementById('secondInput').value;
    if (firstInput.trim() === '' || secondInput.trim() === '') {
        return result.textContent = `Please fill both the integer fields`;
    }
    findGCD(+firstInput, +secondInput);
});

reset.addEventListener('click', () => {
    firstInput.value = '';
    secondInput.value = '';
    result.textContent = '';
})

function findGCD(a, b) {

    // Check if a & b are integers, both not null.
    if ( !Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
        return result.textContent = `Please enter two integers smaller than 9007199254740991`;
    }
    
    if ( a === 0 && b === 0) return result.textContent = `At least one integer should be non-null`;

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