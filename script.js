// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
  }
 console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
  }
 console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
      }
      return reversed;
    }
 console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];

 function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        // Swap elements at start and end positions
        let temp = array[start];
        array[start] = array[end];
    array[end] = temp;
// Move pointers towards the center
start++;
end--;
}
}
let arrayValue = [1, 2, 3, 4, 5];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
