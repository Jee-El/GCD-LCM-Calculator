# Euclidean-algorithm
note: There is definitely a simpler method to implement it but this is what i've come up with so far. It's 1am so i'll try to improve it later.

To use it, copy the function code => press f12 => go to the console panel => paste it there => call it with gcd(a,b)

e.g: gcd(123, 137)

Ever since we studied the GCD and the Euclidean algorithm at school, I've been wondering about what it would look like in a programming language. And as I've been learning the basics of javascript lately, I thought I'd try to code it in js.

I started with writing some pseudocode on paper to gather some ideas about how I could make such a functionality, and to be more specific, I wrote the algorithm as we write it at school: by starting with 2 integers a and b, which can be written euclidean division as a = bq + r, where q is an integer and r the rest of the division of a by b
*whether b could be equal to 0 or not doesnt matter, as it would simply be a = 0*q + r

*whether q,b,a are negative or positive doesn't change anything; but for simplifity's sake we'll assume that they all are positive integers, and that
a > b.

after that we would check if the rest, r, is equal to 0 or not:

* if r = 0, then the GCD would be b

* if r != 0, we'd have to divide b by r, which gets us b = rq' + r', if r' = 0 then the GCD would be the last non-null rest which is r.

and we repeat the same process until we get a rest that's equal to zero, and that would mean that the last non-null rest is the GCD

BUT this method would require having 4 variables, not in the coding sense, so i tried to shorten it. This led me to use modulo, so instead of writing
a = bq + r I could simply make it a = r[b], or a % b = r

but this still would make me use several notations for the rest, r r' r'' etc.. So instead of writing the next step of the algorithm, in case the rest isn't equal to 0, as b % r = r', I typed it as b % (a%b) = r', and then in the next step as (a%b) % (b % (a%b)) = r''. This meant the 'r' wasn't needed anymore.

At this point, the algorithm started looking like a recursive function, calling (a,b) and then (b, a%b) and so on
