// Write a function that removes all items that are not numbers from the array.
//  The function should modify the existing array, not create a new one.
// For example, if the input array contains values [1, 'a', 'b', 2],
// after processing, the array will contain only values [1, 2].

const arr1 = [1, "a", "b", 2, "c", 33, "d", "e", 100, true, "f", "g", 1];

function filterNumbersFromArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      arr.splice(i, 1); // remove element at position i
      i--; // decrease index of array when remove
    }
  }
}

filterNumbersFromArray(arr1);
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
// [ 1, 2, 33, 100 ]
