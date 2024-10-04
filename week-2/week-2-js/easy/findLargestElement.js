/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(findLargestElement([12, 332, 123, 432]));
console.log(findLargestElement([12, 333, 123, 562]));
console.log(findLargestElement([12, 3232, 123, 7322]));
console.log(findLargestElement([123123123, 33123232, 112313, 2123434]));
module.exports = findLargestElement;
