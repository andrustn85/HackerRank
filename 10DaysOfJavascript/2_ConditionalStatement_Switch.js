// Objective
//
// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.
//
// Task
//
// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
//
// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).
//
// Input Format
//
// Stub code in the editor reads a single string denoting  from stdin.
//
// Constraints
//
// , where  is the length of .
// String  contains lowercase English alphabetic letters (i.e., a through z) only.
// Output Format
//
// Return either A, B, C, or D according to the criteria given above.
//
// Sample Input 0
//
// adfgt
// Sample Output 0
//
// A
// Explanation 0
//
// The first character of string  is a. Because the given criteria stipulate that we print A any time the first character is in , we return A as our answer.

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
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here

    const split = s.split('')
    const letterIdx0 = split[0]

    const aeiou = new Set(['a', 'e', 'i', 'o', 'u']);
    const bcdfg = new Set(['b', 'c', 'd', 'f', 'g']);
    const hjklm = new Set(['h','j','k','l','m']);
    const npqrstuvwxyz = new Set(['n','p','q','r','s','t','u','v','w','x','y','z']);

    switch (true){
        case aeiou.has(letterIdx0):
            return 'A'
        break;
        case bcdfg.has(letterIdx0):
            return 'B'
        break;
        case hjklm.has(letterIdx0):
            return 'C'
        break;
        case npqrstuvwxyz.has(letterIdx0):
            return 'D'
        break;
        default:
        console.log('Not a letter')
    }
    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}
