// TODO: Write your function in this file
// The end result is an array of numbers that excludes the numbers listed in the exceptions
// I need to use the method Math.random() to create an array of numbers
//I need to write a function that acepts two values one for lower and one for upper for the math.ramdom() numbers
//The function should be part of a varialbe e.g. let X = f(upper, lower)
//upper and lower should be defined as variables
// I need to write code to get upper value from array
// I need to write code to get lower value from array
// I need to display all numbers from the array showing the upper and lower values in the console.log
// The function should return an array containing all the numbers from lower to upper including lower and upper themselves
// exceptions


//new // english: i want to start from a lower number up until an upper number and create an array containing all the numbers lower -> upper. If the number is / 3 then instead of number, have 'Fizz', etc...


// Input: lower number from which we start populating array; upper number to end populating array
// Output: an array containing all the numbers from lower to upper, incl. lower and upper; if number is div by 3, use 'Fizz', if div by 5 use 'Buzz' if divisible by both, use 'FizzBuzz'

// example: fizzbuzz(lower=3, upper=6)
// output: ['Fizz', 4, 'Buzz', 'Fizz']

function fizzBuzz(lower, upper) {
    const newNumber = []
    
//if i is / by 15 then push string 'FizzBuzz'
        //elseif i is / 3 then push strig 'Fizz'
        //elseif i is / 5 then push string 'Buzz'
        //eslse push number(i)
    for (let i = lower; i <= upper; i++) {
        console.log(i)
        if (i % 15 === 0) {
            newNumber.push('FizzBuzz')
        }
        else if (i % 3 === 0) {
            newNumber.push('Fizz')
        }
        else if (i % 5 === 0) {
            newNumber.push('Buzz')
        }
        else {
            newNumber.push(i)
        }
    }


    return newNumber
} 

console.log(fizzBuzz(3, 16))
// array for 3, 4, 5, 6 and 7
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
