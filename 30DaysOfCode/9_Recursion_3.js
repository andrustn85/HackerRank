// Objective
// Today, we're learning and practicing an algorithmic concept called Recursion. Check out the Tutorial tab for learning materials and an instructional video!
//
// Recursive Method for Calculating Factorial
// Task
// Write a factorial function that takes a positive integer,  as a parameter and prints the result of  ( factorial).
//
// Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of .
//
// Input Format
//
// A single integer,  (the argument to pass to factorial).
//
// Constraints
//
// Your submission must contain a recursive function named factorial.
// Output Format
//
// Print a single integer denoting .
//
// Sample Input
//
// 3
// Sample Output
//
// 6
// Explanation
//
// Consider the following steps:
//
// From steps  and , we can say ; then when we apply the value from  to step , we get . Thus, we print  as our answer.

// SOLUTION

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the factorial function below.
function factorial(n) {

    if (n < 0)
        return -1;
    else if (n === 0)
        return 1;
    else {
        const res = (n * factorial(n - 1))
        return res;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}
