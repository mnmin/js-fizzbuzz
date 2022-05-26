// I need a function that results in an array of numbers. 
// The function contains two numbers that are the lower and upper value of the array
// Inside the function I need a const to store the values of the array
// Inside the function I need a foor loop that runs the array starting at lower and ending at upper
//inside the function: if a number is divisible by 3 or 5 (15) the number should be substituted by the string 'FizzBuzz'
// inside the function: else if a number is divisible by 3 the number should be substituted by the string 'Fizz'
// inside the function: else a number is divisible by 5 the number should be substituted by the string 'Buzz'
// 

function fizzBuzz (lower, upper){
    const newNumber = []

    for (let i = lower; i <= upper; i++){

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
console.log(fizzBuzz(1, 20))
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
