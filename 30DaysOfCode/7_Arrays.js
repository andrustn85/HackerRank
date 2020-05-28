/*

Objective
Today, we're learning about the Array data structure. Check out the Tutorial tab for learning materials and an instructional video!

Task
Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

Input Format
The first line contains an integer,  (the size of our array).
The second line contains  space-separated integers describing array 's elements.

Constraints
, where  is the  integer in the array.

Output Format
Print the elements of array  in reverse order as a single line of space-separated numbers.

Sample Input
4
1 4 3 2

Sample Output
2 3 4 1

*/

// SOLUTION

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine(), 10);
  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));
  const sort = arr.reverse().join(" ");
  console.log(sort);
}
