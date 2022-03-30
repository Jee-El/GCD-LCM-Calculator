// GCD stands for Greatest Common Divisor

// Here modulo is defined as : a = r [b] <=> b / a - r . But the modulo operator in js acts differently because, to it, `a % b` means DIVIDE a by b. Since dividing by 0 gets us nowhere, `a % 0` would return NaN. Meanwhile, if we follow the first definition, a = r [0] is true and makes sense, although r would have to be equal to a. So I wrote an else..if statement to make a % 0 = |a|.

// The forward slash meaning "divides".

function GCD(a, b) {

    // Check if a & b are integers, positive, not null.
    if ( !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || (a == 0 && b == 0) ) {
        return `the arguments, a & b, should be positive integers and at least one of them is not null`;
    } else if (b === 0) {
        /*
        JS's definition of modulo is different than what we're taught at school,
        this is to make it align with that.
        */
        return a > 0 ? a : -a;
    } else if (a === 0) {
        // 0 % x = 0 but the absolute value of x is the GCD.
        return b > 0 ? b : -b;
    } else if (a % b === 0) {
        // To end Euclide's algorithm.
        return a > b ? b : a;
    }
    return GCD(b, a % b);
}