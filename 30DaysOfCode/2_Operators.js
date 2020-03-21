// Objective
// In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
//
// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!
//
// Input Format
//
// There are  lines of numeric input:
// The first line has a double,  (the cost of the meal before tax and tip).
// The second line has an integer,  (the percentage of  being added as tip).
// The third line has an integer,  (the percentage of  being added as tax).
//
// Output Format
//
// Print the total meal cost, where  is the rounded integer result of the entire bill ( with added tax and tip).
//
// Sample Input
//
// 12.00
// 20
// 8
// Sample Output
//
// 15
// Explanation
//
// Given:
// , ,
//
// Calculations:
//
//
//
//
// We round  to the nearest dollar (integer) and then print our result, .


// SOLUTION


'use strict';

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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {

    const tip = meal_cost * (tip_percent/100)
    const tax = meal_cost * (tax_percent/100)
    const totalCost = meal_cost + tip + tax
    const rounding = Math.round(totalCost)
    console.log(rounding)
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
