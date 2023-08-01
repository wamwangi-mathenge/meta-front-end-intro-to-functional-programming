// Explore the use of functional programming style to calculate currency conversion.

var currencyOne = 100;
var currencyTwo = 0;
var conversionRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne, conversionRate)

console.log(currencyTwo)