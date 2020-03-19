// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.
//
// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .
//
// Your task is to find their comparison points by comparing  with ,  with , and  with .
//
// If , then Alice is awarded  point.
// If , then Bob is awarded  point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.
//
// Given  and , determine their respective comparison points.
//
// For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.
//
// Function Description
//
// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.
//
// compareTriplets has the following parameter(s):
//
// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating
// Input Format
//
// The first line contains  space-separated integers, , , and , describing the respective values in triplet .
// The second line contains  space-separated integers, , , and , describing the respective values in triplet .
//
// Constraints
//
// Output Format
//
// Return an array of two integers denoting the respective comparison points earned by Alice and Bob.
//
// Sample Input 0
//
// 5 6 7
// 3 6 10
// Sample Output 0
//
// 1 1
// Explanation 0
//
// In this example:
//
// Now, let's compare each individual score:
//
// , so Alice receives  point.
// , so nobody receives a point.
// , so Bob receives  point.
// Alice's comparison score is , and Bob's comparison score is . Thus, we return the array .
//
// Sample Input 1
//
// 17 28 30
// 99 16 8
// Sample Output 1
//
// 2 1
// Explanation 1
//
// Comparing the  elements,  so Bob receives a point.
// Comparing the  and  elements,  and  so Alice receives two points.
// The return array is .

// SOLUTION

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    const aliceBase = a.map((valueA) => { return { aliceValue: valueA } })
    const bobBase = b.map((valueB) => { return { bobValue: valueB } })

    let resultAlice = []
    let resultBob = []

    if(aliceBase[0].aliceValue > bobBase[0].bobValue) { const alicePush0 = resultAlice.push(1) }
    if(aliceBase[1].aliceValue > bobBase[1].bobValue){ const alicePush1 = resultAlice.push(1) }
    if(aliceBase[2].aliceValue > bobBase[2].bobValue){ const alicePush2 = resultAlice.push(1) }

    if(aliceBase[0].aliceValue < bobBase[0].bobValue){ const bobPush0 = resultBob.push(1) }
    if(aliceBase[1].aliceValue < bobBase[1].bobValue){ const bobPush1 = resultBob.push(1) }
    if(aliceBase[2].aliceValue < bobBase[2].bobValue){ const bobPush2 = resultBob.push(1) }

    const reduceAlice = resultAlice.reduce((total, num) => { return total + num })
    const reduceBob = resultBob.reduce((total, num) => { return total + num })

    return [reduceAlice, reduceBob]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
