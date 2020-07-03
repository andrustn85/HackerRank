/*

INSTRUCTIONS

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Specification
solution(number)
Finds the sum of multiples of 3 or 5 that is less than the provided number

Parameters:
number: Number - Maximum number to check against

Return Value
Number - Sum of all multiples of either 3 or 5

Examples:
number	Return Value
10	    23
200	    9168

Sample test:
describe('Multiples of 3 and 5', function() {
  it('should handle basics', function() {
    Test.assertEquals(solution(10), 23);
  });
});

*/

// SOLUTION

const solution = number => {
  let result = 0;

  for (let num = 0; num < number; num++)
    if (num % 3 === 0 || num % 5 === 0) {
      result += num;
    }

  return result;
};
