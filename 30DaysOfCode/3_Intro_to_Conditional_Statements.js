// Objective
// In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// Given an integer, , perform the following conditional actions:
//
// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.
//
// Input Format
//
// A single line containing a positive integer, .
//
// Constraints
//
// Output Format
//
// Print Weird if the number is weird; otherwise, print Not Weird.
//
// Sample Input 0
//
// 3
// Sample Output 0
//
// Weird
// Sample Input 1
//
// 24
// Sample Output 1
//
// Not Weird
// Explanation
//
// Sample Case 0:
//  is odd and odd numbers are weird, so we print Weird.
//
// Sample Case 1:
//  and  is even, so it isn't weird. Thus, we print Not Weird.


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

function conditionalWeirdness(N) {

  if(N === 1 || (N === 3) || (N === 5) || (N % 2 !== 0)){ console.log('Weird')}
  else if(N > 20){ console.log('Not Weird') }
  else if((N === 2) || (N === 4) ){ console.log('Not Weird'); }
  else if(6 <= N <= 20){ console.log('Weird'); }


    // if(N % 2 !== 0){console.log('Weird')}
    // else if((N % 2 === 0) && (N > 20)){console.log('Not Weird')}
    // else if((N % 2 === 0) && (2 <= N <= 5)){console.log('Not Weird')}
    // else if((N % 2 === 0) && (6 <= N <= 20)){console.log('Weird')}
    // else {console.log(N)}


    // if(((N % 2 === 0) || (N % 2 !== 0)) && (2 <= N <= 5)){console.log('Not Weird')}
    // else if((N % 2 === 0) && (6 <= N <= 20)){console.log('Weird')}
    // else if((N % 2 === 0) && (N > 20)){console.log('Not Weird')}
    // else if((N % 2 !== 0)){console.log('Weird')}
    // else {console.log(N)}

        // if(N % 2 !== 0){console.log('Weird')}
        // else {
        //     switch (N){
        //         case (2 <= N <= 5):
        //         console.log('Not Weird');
        //         break;
        //         case (6 <= N <= 20):
        //         console.log('Weird');
        //         break;
        //         case (N > 20):
        //         console.log('Not Weird');
        //         break;
        //         default:
        //         console.log(N);
        //         break;
        //     }
        // }
}

function main() {
    const N = parseInt(readLine(), 10);
    // call the function here
    conditionalWeirdness(N)
}
