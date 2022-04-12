// GCD stands for Greatest Common Divisor

/* Here modulo is defined as : a = r [b] <=> b / a - r . But the modulo operator in js acts differently because, to it, `a % b` means DIVIDE a by b.
Since dividing by 0 gets us nowhere, `a % 0` would return NaN. Meanwhile, if we follow the first definition, a = r [0] is true and makes sense,
although r would have to be equal to a. So I wrote an else..if statement to make a % 0 = |a|.
*/

// The forward slash means "divides".

const result = document.querySelector('p');
const submit = document.querySelector('.submit.button');
const reset = document.querySelector('.reset.button')

submit.addEventListener('click', () => {
    let firstInput = +document.getElementById('firstInput').value;
    let secondInput = +document.getElementById('secondInput').value;
    findGCD(firstInput, secondInput);
});

reset.addEventListener('click', () => {
    firstInput.value = '';
    secondInput.value = '';
    result.textContent = '';
})


function findGCD(a, b) {

    // Check if a & b are integers, both not null.
    if ( !Number.isInteger(a) || !Number.isInteger(b) || (a == 0 && b == 0) ) {
        return result.textContent = `the arguments, a & b, should be integers and at least one of them is not null`;
    } 
    
    if (a == 0) {
        // 0 % b = 0 but the absolute value of b is the GCD.
        return result.textContent = b > 0 ? b : -b;
    }

    if (b == 0) {
        /*
        JS's definition of modulo is different than what we're taught at school,
        this is to make it align with that.
        */
        return findGCD(b, a);
    }

    if (a % b == 0) {
        // To end Euclide's algorithm.
        return result.textContent = Math.abs(a) > Math.abs(b) ? Math.abs(b) : Math.abs(a);
    }

    return findGCD(b, a % b);
}