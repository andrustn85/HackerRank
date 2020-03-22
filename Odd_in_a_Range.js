// Exercise = Sample test for interviews
// Given two numbers `left` and `right` which are the begining and the end of an array.
// Return all the odd numbers in between including the two given numbers


// SOLUTION (not verified via HackerRank)

const left = 3
const right = 9

// give all the numbers in between
const allNum = [];
for (let i = left; i <= right; i++) {
  allNum.push(i);
}
console.log('all numbers', allNum)

// give all the odd number in between
const oddNum = []
for (let od = allNum[0]; od <= allNum[allNum.length-1]; od++) {
  if(od % 2 !== 0){
    oddNum.push(od);
  }
  console.log('oddNum', oddNum)
}
