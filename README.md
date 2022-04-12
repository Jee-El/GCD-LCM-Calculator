# Euclidean-Algorithm

## How to use it
One way to use it is to copy the function code => press f12 => go to the console panel => paste it there => call it with findGCD(a,b)

**Try** : findGCD(9007199254740991, 7199254740991) . The first argument is the greatest (safe) integer in Javascript, and yet it finds the GCD almost immediately :D.

## Why I chose Euclide's algorithm
Ever since we studied the GCD and the Euclidean algorithm at school, I've been wondering about what it would look like in a programming language, that is because I'd often come across the word *algorithm* in programming communities. As I've been learning the basics of javascript lately, I thought I'd try to code it in js.

## What I started with
I started with writing some pseudocode on paper to gather some ideas about how I could make such a functionality, and to be more specific, I wrote the algorithm as we write it at school, which starts as: `a = bq + r`, where a, b, q and r are all integers whose sign doesn't actually 'matter'. But for simplicity's sake, we'll assume that all of them are positive integers and that `a>b`. *even if we take b > a it would still work*

The expression `a = bq + r` is what dividing a by b would look like, so q is the quotient and r is the remainder, but keep in mind we aren't actually dividing a by b the usual way. So while a can't divide 0, we still can write `a = 0 * q + r` and it would be correct for r = a. Same concept applies for dividing 0 by 0 : `0 = 0 * q + r`, for r = 0 it's correct. Moreover, these last two mentioned cases are evident so let's assume a and b are both *not* equal to 0.

Now let's get started with how the algorithm works:

* First, we 'divide' a by b so we get : `a = bq + r`, *now the question is: is r equal to 0 or not?*

    * if r = 0 : `a = bq` => `b/a` => findGCD(a, b) = b. The algorithm is done.
    
    * if r != 0 : Divide b by r, now we get `b = rq' + r'`. r' and q' are not necessarily equal to q and r respectively.
    
    *   * r' = 0 : `b = rq'` therefore findGCD(b, r) = findGCD(a,  b) = r. The equality of findGCD(a, b) and findGCD(b, r) can be demonstrated but if I were to demonstrate everything it would take quite a lot of text, but if you've read this far, just message me I'm willing to explain everything about it.
    
    *   * r' != 0 : then we repeat the same previous steps until we get a null remainder. The remainder right before that null one is the GCD and is equal to the last quotient of the algorithm (not 'q'), as you can see in the 4th step above.

Oof that was a lot of text, wasn't it? Using modulo or `%` is gonna make it simpler, so don't worry and keep reading :D

## First issue and how i solved it
The algorithm, as explained above, requires at least 4 parameters and we don't want that, who likes having too many parameters anyways? No one. To prevent that, I rewrote the algorithm in modulo expressions as the following :
* Get the remainder of the divison of a by b : `a % b = r`

    * r = 0, or simply a % b = 0 : findGCD(a, b) = b. *Remember that a % b = r is similar to a = bq + r*

    * a % b != 0 : Calculate b % (a % b). *Remember that a % b = r, so b % r = b % (a % b)*

* Repeat the same steps again, and replace the remainder r just like we did above so you only have to worry about 2 parameters, a and b.

Good good, we got to use only 2 parameters now! and it's a prime number, ain't that cool?

## Ok let's get into the coding part
Now that we rewrote the algorithm by using the modulo operator, we can see that it's quite similar to how a recursive function works, a function that calls itself multiple times until a certain condition is met and it stops calling itself, then returns a value. Check out **Web dev simplified** on YouTube if you need a thorough explanation. Okey now do you see how we are basically using the second parameter as an argument for the first parameter, and using the modulo of the first and second parameters as an argument for the second parameter? That's what a recursive function will do for us!

First we'll call the function with the user's input as its arguments, say (a, b) = (8,3). Then the function will check for a condition, aka base case, that will stop the function from calling itself, which is when `a % b = 0`. Remember when I said that the algorithm ends when `r = 0`?.

Well, `8 % 3 = 2` because `8 = 3*2 + 2` so the base condition isn't met here. Now the function will recall itself but this time it'll use the 2nd argument as the first, 8 => 3, and the modulo of the first and second as the new 2nd argument, 3 => 8 % 3.

That gives us `3 % (8 % 3) = 3 % 2 = 1`. The remainder is still not equal to 0. Call the function again with the corresponding new arguments.

We get `(8 % 3) % ( 3 % (8 % 3) ) = ( 8 % 3 ) % 1 = 2 % 1 = 0`. Nice, we finally got to 0! So what's the last non-null remainder here?

It's `1`. Therefore, findGCD(8, 3) = 1.

## Second issue, how am i gonna return the value of the before-last function call?
Or in other words, how am I gonna get the last non-null remainder? `return` would get me the value of the latest call of the recursive function.
After some thinking, I noticed that the last non-null remainder is also the second argument of the latest call or invocation.
Let's go back to the example above. The last call's arguments are 2 and 1, we got 1 from calculating the before-last modulo which was followed by a null remainder, I've also mentioned this in the 2nd section. So now the problem is solved, we just gotta write the code and use `return b;` to get the second argument of the last-call, which is also the GCD.

## Conclusion
As small as a repository this might be, I had a lot of fun while trying to make such a functionality. I'll come back later to this repo to improve the code and add more functionalities. I'm also considering adding this function to the calculator project I'm gonna make :D.

Feel free to message me if there's something that needs clarification!
