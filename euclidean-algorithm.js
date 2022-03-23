// there is probably a simpler method to implement Euclide's algorithm but it's 00am and i'm happy that at least it seems to work well, i'll simplify it later

// gcd stands for Greatest Common Divisor

// here modulo is defined as : x = y [n] <=> n / x - y
// the forward slash meaning "divides"

function gcd(a, b) {

    // check if a & b are numbers or check if both are negative or check if both are null
    if (isNaN(a * b) || (a < 0 && b < 0) || (a == 0 && b == 0) ){
        return `arguments = (a, b) != (0, 0) where both a and b are not negative at the same time`;
    } else if (b === 0) {
        // JS's definition of modulo is different than what we're taught at school, this is to make it align with what we were taught
        return a > 0 ? a : -a;
    } else if (a === 0) {
        // 0 % x = 0 but the positive value of x is the GCD
        return b > 0 ? b : -b;
    } else if (a % b === 0) {
        // to end Euclide's algorithm
        return a > b ? b : a;
    }
    return gcd(b, a % b);
}