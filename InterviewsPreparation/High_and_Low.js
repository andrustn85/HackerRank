/*

INSTRUCTIONS

Task
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input	Output
"1 2 3 4 5"	"5 1"
"1 2 -3 4 5"	"5 -3"
"1 9 3 4 -5"	"9 -5"
Documentation
highAndLow(numbers)

Parameters:
numbers: String
A string of numbers separated by spaces.

Guaranteed Constraints:
All numbers are valid Int32, no need to validate them.
It will never be null or undefined.
There will always be at least one number in the input string.
Returns: String
Two numbers separated by a single space, and highest number must be first.

Sample test:
let assert = require("chai").assert;
describe('high_and_low', function() {
  it('should work for example input 1', function() {
    assert.equal(highAndLow("1 2 3 4 5"), "5 1");
  });
  it('should work for example input 2', function() {
    assert.equal(highAndLow("1 2 -3 4 5"), "5 -3");
  });
  it('should work for example input 3', function() {
    assert.equal(highAndLow("1 9 3 4 -5"), "9 -5");
  });
  it('should work for a single number', function() {
    assert.equal(highAndLow("42"), "42 42");
  });
});

*/

// SOLUTION

const highAndLow = numbers => {
  const split = numbers.split(" ");
  const map = split.map(x => Number(x));
  const max = String(Math.max(...map));
  const min = String(Math.min(...map));
  const concat = max.concat(" ", `${min}`);

  return concat;
};
