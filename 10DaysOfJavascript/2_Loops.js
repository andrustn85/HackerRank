/*

Objective
In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task
Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

Input Format
Locked stub code in the editor reads string  from stdin and passes it to the function.

Output Format
First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

Sample Input 0
javascriptloops
Sample Output 0
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
Explanation 0
Observe the following:
Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .

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

function vowelsAndConsonants(s) {
  const split = s.split("");
  const vowels = ["a", "e", "i", "o", "u", "y", "Y", "A", "E", "I", "O", "U"];
  const vowelsFound = [];
  for (let letter = 0; letter < split.length; letter++) {
    if (vowels.indexOf(split[letter]) != -1) {
      vowelsFound.push(split[letter]);
    }
  }

  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z",
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Z"
  ];
  const consonantsFound = [];
  for (let letter = 0; letter < split.length; letter++) {
    if (consonants.indexOf(split[letter]) != -1) {
      consonantsFound.push(split[letter]);
    }
  }

  const allWord = [];
  const concatWord = allWord.concat(vowelsFound, consonantsFound);
  const join = concatWord.join("\n");
  console.log(join);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
