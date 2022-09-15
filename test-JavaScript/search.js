// The program uses a data structure with an array that can contain items and other arrays.
// Write a function numberOfItems that recursively passes through all arrays and counts the number of occurrences of a given item.
// Keep in mind that arrays can be nested within each other.
// For example,
// var arr = [
//     25,
//     "apple",
//     ["banana", "strawberry", "apple", 25]
//   ];
//   => numberOfItems(arr, 25) and numberOfItems(arr, "apple") for the array below should both return 2.

const arr1 = [
  25,
  "apple",
  ["banana", "strawberry", "apple", 25],
  25,
  30,
  [25, "apple", "apple"]
];

function numberOfItems(arr, item) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      counter += numberOfItems(arr[i], item);
    } else {
      if (arr[i] == item) {
        counter++;
      }
    }
  }
  return counter;
}

let counter = numberOfItems(arr1, 25);
let counter1 = numberOfItems(arr1, "apple");

console.log(counter); // 4
console.log(counter1); // 4
