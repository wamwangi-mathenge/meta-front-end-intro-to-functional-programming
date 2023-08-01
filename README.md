# Introduction to Functional Programming

Computer languages have various styles also known as programming paradigms.

In programming, there are 2 commonly used paradigms. Functional Programming (FP) and Object-Oriented Programming (OOP).

These paradigms can be thought of as approaches to writing code. 


In functional programming, there is a clear distinction between data and functions in functional programming as data can exist outside of functions.

In object-oriented programming, you combine both data and functions into objects.

## Case Study: Explore the use of functional programming style to calculate currency conversion.

~~~
var currencyOne = 100;
var currencyTwo = 0;
var conversionRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne, conversionRate)

console.log(currencyTwo)
~~~