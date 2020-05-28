/*

Objective
In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.

Task
Complete the following functions in the editor below:
getArea(length, width): Calculate and return the area of a rectangle having sides  and .
getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides  and .
The values returned by these functions are printed to stdout by locked stub code in the editor.

Input Format
image
image

Constraints
 and  are scaled to at most three decimal places.

Output Format
image

Sample Input 0
3
4.5
Sample Output 0
13.5
15
Explanation 0
The area of the rectangle is .
The perimeter of the rectangle is .

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
    .trim()
    .split("\n")
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getArea(length, width) {
  let area;
  const mult = length * width;
  return mult;
}

function getPerimeter(length, width) {
  let perimeter;
  const sum = length + width;
  const mult = 2 * sum;
  return mult;
}
